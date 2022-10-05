export interface SquareProps {
  isLight?: boolean;
  skipLabel: undefined;
  selected: boolean;
}

export interface DoneButtonProps {
  isLight: boolean;
  allowFontScaling: boolean;
  onPress: () => any;
}

export interface NextButtonProps {
  nextLabel: string | JSX.Element;
  isLight: boolean;
  allowFontScaling: boolean;
  onPress: () => any;
}

export interface SkipButtonProps {
  skipLabel: string | JSX.Element;
  isLight: boolean;
  allowFontScaling: boolean;
  onPress: () => any;
}
