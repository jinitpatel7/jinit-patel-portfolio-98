interface SectionHeaderProps {
  children: React.ReactNode;
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <div className="relative pb-3">
      <h2 className="font-display text-2xl md:text-3xl font-bold">{children}</h2>
      <div 
        className="absolute bottom-0 left-0 h-[2px] w-24 rounded-full"
        style={{ background: 'var(--gradient-primary)' }}
      />
    </div>
  );
};

export default SectionHeader;
