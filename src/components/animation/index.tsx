import { MotiView } from "moti";
import { Factory, useStyledSystemPropsResolver } from "native-base";
// import { useStyledSystemPropsResolver } from "native-base/src/hooks/useStyledSystemPropsResolver";

const FactoryMotiNativeBaseView = Factory(MotiView);

export const NBMotiView = ({
  from,
  to,
  transition,
  animate,
  children,
  ...props
}: any) => {
  const ConvertTokenizedStyleToStyle = (StyleObject) => {
    const [style, ...restProp] = useStyledSystemPropsResolver(StyleObject);
    return { ...style, ...restProp[0].dataSet };
  };

  const resolvedProps = {
    from: ConvertTokenizedStyleToStyle(from),
    animate: ConvertTokenizedStyleToStyle(animate),
    transition: { type: "timing", duration: 100, delay: 100 },
    // transition: ConvertTokenizedStyleToStyle(transition),
  };
  return (
    <FactoryMotiNativeBaseView {...resolvedProps} {...props}>
      {children}
    </FactoryMotiNativeBaseView>
  );
};
