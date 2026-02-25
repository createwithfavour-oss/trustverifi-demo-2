import PillLabel from './PillLabel'

export default function SectionHeading({ pill, heading, supporting }) {
  return (
    <div className="text-center mb-10 md:mb-12">
      {pill && <PillLabel>{pill}</PillLabel>}
      <h2 className="font-serif text-brand-dark mt-4 leading-[1.2]" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>
        {heading}
      </h2>
      {supporting && (
        <p className="text-text-secondary mt-4 max-w-xl mx-auto text-[17px] leading-relaxed">
          {supporting}
        </p>
      )}
    </div>
  )
}
