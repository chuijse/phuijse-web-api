import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'impartedAt',
  title: 'Imparted at',
  type: 'document',
  fields: [
    defineField({
      name: 'program',
      title: 'Program',
      type: 'string',
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
})
