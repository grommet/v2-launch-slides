import { Box, Keyboard } from 'grommet';
import * as React from 'react';

export interface IProps {
  slides: React.ComponentType[]
}

interface IState {
  current: number;
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
  public readonly state: Readonly<IState> = { current: 0 }

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
  }

  public componentWillUnmount () {
    clearTimeout(this.timer);
    document.removeEventListener('touchstart', this.onTouchStart);
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
    document.removeEventListener('touchcancel', this.onTouchCancel);
    // document.removeEventListener('wheel', this.onWheel);
  }

  public onPrevious = (): void => {
    const { slides } = this.props;
    const { current } = this.state;
    this.setState({
      current: (current > 0) ? (current - 1) : (slides.length - 1),
    });
  }

  public onNext = (): void => {
    const { slides } = this.props;
    const { current } = this.state;
    this.setState({
      current: (current < (slides.length - 1)) ? (current + 1) : 0,
    });
  }

  public onKeyDown = (event: KeyboardEvent): void => {
    const { slides } = this.props;
    const { keyCode } = event;
    const current = keyCode - 49;
    if (current >= 0 && current <= (slides.length - 1)) {
      this.setState({ current });
    }
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

  public render() {
    const { slides } = this.props;
    const { current } = this.state;
    const Slide: React.ComponentType = slides[current];
    return (
      <Box
        ref={this.ref}
        fill={true}
        background="black"
        onWheel={this.onWheel}
      >
        <Keyboard
          target="document"
          onLeft={this.onPrevious}
          onRight={this.onNext}
          onShift={this.enterFullscreen}
          onEsc={this.exitFullscreen}
          onKeyDown={this.onKeyDown}
        >
          <Slide />
        </Keyboard>
      </Box>
    );
  }
}

export default Viewer;
