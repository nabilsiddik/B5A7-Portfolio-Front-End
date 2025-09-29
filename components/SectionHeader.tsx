
const SectionHeader = ({title, subtitle}: {title: string, subtitle: string}) => {
  return (
    <div className="mb-7 text-center">
       <h2 className="font-bold text-4xl mb-2">{title && title}</h2>
       <p className="lg:max-w-xl mx-auto">{subtitle && subtitle}</p>
    </div>
  )
}

export default SectionHeader
