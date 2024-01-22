interface LanguageChipProp {
  label: string,
  icon: string,
}
const LanguageChip: React.FC<LanguageChipProp> = ({ label, icon }) => {
  return (
    <div className="rounded-full px-2 py-1 bg-gray-900 text flex justify-start items-center gap-2 text-sm">
      <img src={icon} alt={`${label}'s icon`} className="w-6 h-6" />
      <span>{label}</span>
    </div>
  )
}

export default LanguageChip