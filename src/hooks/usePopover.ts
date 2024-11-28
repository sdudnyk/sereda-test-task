import { useState } from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useDismiss,
  useInteractions,
} from '@floating-ui/react';

export const usePopover = ()=> {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    middleware: [offset(-3), flip(), shift()],
    whileElementsMounted: autoUpdate,
    open: isPopoverVisible,
    onOpenChange: setIsPopoverVisible,
  });
  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([dismiss]);

  return { isPopoverVisible, setIsPopoverVisible, refs, floatingStyles, getFloatingProps };
}