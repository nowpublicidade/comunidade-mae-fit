import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  number: string;
}

interface FeaturesSectionWithHoverEffectsProps {
  features: Feature[];
}

export function FeaturesSectionWithHoverEffects({ features }: FeaturesSectionWithHoverEffectsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  number,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  number: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-muted/20",
        (index === 0 || index === 4) && "lg:border-l border-muted/20",
        index < 4 && "lg:border-b border-muted/20"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-secondary/30 to-transparent pointer-events-none" />
      )}
      
      {/* Icon and Number */}
      <div className="mb-4 relative z-10 px-10">
        <div className="relative">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover/feature:bg-primary/20 transition-colors duration-200 text-primary">
            {icon}
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
            {number}
          </div>
        </div>
      </div>
      
      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-muted group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};