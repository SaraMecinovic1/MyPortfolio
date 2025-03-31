import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value = 0, ...props }, ref) => {
  const [progress, setProgress] = React.useState(0);
  const progressRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (value === null || value === undefined) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = value / 50;

          const interval = setInterval(() => {
            start += step;
            setProgress(Math.min(start, value));
            if (start >= value) clearInterval(interval);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [value]);

  return (
    <div ref={progressRef}>
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-mainText/20 dark:bg-neutral-50/20",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 bg-primary transition-all duration-300 dark:bg-neutral-50"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
