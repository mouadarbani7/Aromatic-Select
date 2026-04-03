import { motion } from "framer-motion";

interface VolumeOption {
  ml: number;
  price: number;
}

interface VolumeSelectorProps {
  options: VolumeOption[];
  selectedMl: number;
  onChange: (ml: number) => void;
}

export function VolumeSelector({ options, selectedMl, onChange }: VolumeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {options.map((opt) => {
        const isSelected = selectedMl === opt.ml;
        return (
          <button
            key={opt.ml}
            onClick={() => onChange(opt.ml)}
            className={`relative px-6 py-3 border text-sm tracking-widest transition-all duration-300 ${
              isSelected 
                ? "border-primary text-primary" 
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            {isSelected && (
              <motion.div
                layoutId="activeVolume"
                className="absolute inset-0 bg-primary/10"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{opt.ml}ML</span>
          </button>
        );
      })}
    </div>
  );
}
