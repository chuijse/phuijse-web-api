import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'paper',
  title: 'Paper',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'string',
    }),
    defineField({
      name: 'journal',
      title: 'Journal',
      type: 'string',
    }),
    defineField({
      name: 'doi',
      title: 'DOI',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      authors: 'authors',
      year: 'year',
    },
    prepare(selection) {
      const {title, authors, year} = selection
      return {
        title: title,
        subtitle: `${year}: ${authors}`,
      }
    },
  },
})
