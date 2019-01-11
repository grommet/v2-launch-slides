import { Box, Keyboard, RangeInput, Stack } from 'grommet';
import * as React from 'react';

export interface IProps {
  slides: React.ComponentType[]
}

interface IState {
  current: number;
  showScrubber: boolean;
}

interface ITouch {
  at: number;
  x: number;
  y: number;
}

const createTouch = (event: React.TouchEvent<HTMLDivElement>) :(ITouch | undefined) => {
  if (event.changedTouches.length === 1) {
    const touch = event.changedTouches.item(0);
    if (touch) {
      return {
        at: (new Date()).getTime(),
        x: touch.pageX,
        y: touch.pageY,
      };
    }
  }
  return undefined;
}

class Viewer extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = { current: 0, showScrubber: false }

  private ref = React.createRef<HTMLDivElement>();

  private touchStart?: ITouch;

  private timer?: any;

  // private busy?: boolean;

  public componentDidMount () {
    document.addEventListener('touchstart', this.onTouchStart);
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchend', this.onTouchEnd);
    document.addEventListener('touchcancel', this.onTouchCancel);
    // document.addEventListener('wheel', this.onWheel);
    window.addEventListener('popstate', this.onPopState);
    this.onPopState();
  }

  public componentWillUnmount () {
    clearTimeout(this.timer);
    document.removeEventListener('touchstart', this.onTouchStart);
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
    document.removeEventListener('touchcancel', this.onTouchCancel);
    // document.removeEventListener('wheel', this.onWheel);
    window.removeEventListener('popstate', this.onPopState);
  }

  public onPrevious = (): void => {
    const { slides } = this.props;
    const { current } = this.state;
    this.setState({
      current: (current > 0) ? (current - 1) : (slides.length - 1),
    }, this.updateLocation);
  }

  public onNext = (): void => {
    const { slides } = this.props;
    const { current } = this.state;
    this.setState({
      current: (current < (slides.length - 1)) ? (current + 1) : 0,
    }, this.updateLocation);
  }

  public onKeyDown = (event: KeyboardEvent): void => {
    const { slides } = this.props;
    const { keyCode } = event;
    const current = keyCode - 49;
    if (current >= 0 && current <= (slides.length - 1)) {
      this.setState({ current }, this.updateLocation);
    } else if (keyCode === 34) {
      this.onNext();
    } else if (keyCode === 33) {
      this.onPrevious();
    }
  }

  public onMouseMove = (): void => {
    const { showScrubber } = this.state;
    if (!showScrubber) {
      this.setState({ showScrubber: true });
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ showScrubber: false });
    }, 3000);
  }

  public onScrub = (event: React.FormEvent<HTMLInputElement>): void => {
    const current: number = parseInt(event.currentTarget.value, 10);
    this.setState({ current }, this.updateLocation);
  }

  public onWheel = (event: any): void => {
    // event.preventDefault();
    // const deltaX = event.deltaX;
    // if (!this.busy && Math.abs(deltaX) > 50) {
    //   if (deltaX > 0) {
    //     this.onNext();
    //   } else if (deltaX < 0) {
    //     this.onPrevious();
    //   }
    //   this.busy = true;
    // }
    // clearTimeout(this.timer);
    // this.timer = setTimeout(() => {
    //   this.busy = false;
    // }, 50);
  }

  public onTouchStart = (event: any): void => {
    event.preventDefault();
    this.touchStart = createTouch(event);
  }

  public onTouchMove = (event: any): void => {
    event.preventDefault();
  }

  public onTouchEnd = (event: any): void => {
    if (this.touchStart) {
      const touchEnd = createTouch(event);
      if (touchEnd) {
        const delta: ITouch = {
          at: (touchEnd.at - this.touchStart.at),
          x: (touchEnd.x - this.touchStart.x),
          y: (touchEnd.y - this.touchStart.y),
        }

        if (Math.abs(delta.y) < 100 && delta.at < 200) {
          if (delta.x > 100) {
            this.onPrevious();
          } else if (delta.x < -100) {
            this.onNext();
          }
        }
      }
      this.touchStart = undefined;
    }
  }

  public onTouchCancel = (event: any): void => {
    this.touchStart = undefined;
  }

  public enterFullscreen = (): void => {
    const viewer: any = this.ref.current!;
    if (viewer) {
      viewer.webkitRequestFullscreen();
    }
  }

  public exitFullscreen = (): void => {
    const doc: any = document;
    doc.webkitExitFullscreen();
  }

  public onPopState = (): void => {
    const { location } = document;
    const current = parseInt(location.hash.slice(1), 10) || 0;
    this.setState({ current });
  };

  public render() {
    const { slides } = this.props;
    const { current, showScrubber } = this.state;
    const Slide: React.ComponentType = slides[current];
    return (
      <Box
        ref={this.ref}
        fill={true}
        background="black"
        onWheel={this.onWheel}
        onMouseMove={this.onMouseMove}
      >
        <Keyboard
          target="document"
          onLeft={this.onPrevious}
          onRight={this.onNext}
          onUp={this.onPrevious}
          onDown={this.onNext}
          onEnter={this.onNext}
          onShift={this.enterFullscreen}
          onEsc={this.exitFullscreen}
          onKeyDown={this.onKeyDown}
        >
          <Stack fill={true}>
            <Slide />
            {showScrubber && (
              <Box animation="fadeIn" fill={true} justify="end">
                <RangeInput
                  min={0}
                  max={slides.length - 1}
                  value={current}
                  onChange={this.onScrub}
                />
              </Box>
            )}
          </Stack>
        </Keyboard>
      </Box>
    );
  }

  private updateLocation = (): void => {
    const { current } = this.state;
    window.history.pushState(undefined, '', `#${current}`);
  }
}

export default Viewer;
