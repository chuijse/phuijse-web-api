import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'selected',
      title: 'Selected',
      type: 'boolean',
    }),
    defineField({
      name: 'institutions',
      title: 'Institutions',
      type: 'array',
      of: [{type: 'reference', to: {type: 'impartedAt'}}],
    }),
    defineField({
      name: 'startYear',
      title: 'Start year',
      type: 'number',
    }),
    defineField({
      name: 'finalYear',
      title: 'Final year',
      type: 'number',
    }),
    defineField({
      name: 'repository',
      title: 'Repository',
      type: 'url',
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      startYear: 'startYear',
      finalYear: 'finalYear',
      program: 'institutions.0.program',
    },
    prepare(selection) {
      const {title, startYear, finalYear, program} = selection
      return {
        title: title,
        subtitle: `${program}: ${startYear} to ${finalYear}`,
      }
    },
  },
})
