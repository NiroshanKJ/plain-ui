import { UIVariations } from ".";

export const getBackgroundVariant = (variant: UIVariations) => {
  switch (variant) {
    case UIVariations.PRIMARY:
      return "--bg-primary";
    case UIVariations.SECONDARY:
      return "--bg-secondary";
    case UIVariations.SUCCESS:
      return "--bg-secondary";
    case UIVariations.WARNING:
      return "--bg-warning";
    case UIVariations.DANGER:
      return "--bg-danger";
    case UIVariations.INFO:
      return "--bg-info";
  }
};
