const variants = {
  // Amalfi Coast — couple names, hero text
  names:   'font-script text-3xl md:text-5xl font-normal leading-tight',
  names2xl: 'font-script text-1xl md:text-2xl font-normal leading-tight',

  // Champagne Limousines — section headings, labels
  heading: 'font-elegant text-2xl md:text-4xl tracking-widest',
  label:   'font-elegant text-xs md:text-sm tracking-[0.3em] uppercase',
  headingU:  'font-elegant text-2xl md:text-4xl tracking-tight uppercase', 
  note: 'font-elegant text-sm md:text-base tracking-tight italic',
  subHeader: 'font-elegant text-sm md:text-base tracking-tight uppercase',
  timeStamp: 'font-elegant text-xs tracking-wide',
  eventTitle: 'font-elegant text-sm font-semibold tracking-wide',

  // Cormorant Garamond — subheadings, pull quotes
  sub:     'font-heading text-xl md:text-3xl italic font-light',
 


  // Jost — body copy, descriptions
  body:    'font-body text-base font-light leading-relaxed',
  caption: 'font-body text-sm text-stone-500 leading-relaxed',
}

export default function Typography({
  as: Tag = 'p',
  variant = 'body',
  className = '',
  children
}) {
  return (
    <Tag className={`${variants[variant]} ${className}`}>
      {children}
    </Tag>
  )
}