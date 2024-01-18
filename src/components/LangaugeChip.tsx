interface LanguageChipProp {
  label: string,
  icon: string,
}
const LanguageChip: React.FC<LanguageChipProp> = ({ label, icon }) => {
  return (
    <div className="rounded-full p-8 bg-gray-00 text flex justify-start items-center gap-2">
      <img src={icon} alt={`${label}'s icon`} className="w-8 h-8" />
      <span>{label}</span>
    </div>
  )
}

export default LanguageChip