export const mockedComponents = {
  team_filter_123: {
    loading: false,
    columns: ['team_name'],
    dimensions: ['team_name'],
    measures: [],
    metadata: {
      filters: {
        input: [],
        output: [
          {
            changed: false,
            initial: true,
            name: 'dropdown',
            urlparam: 'team_name',
            value: 'Flames',
          },
        ],
      },
      output_filters: {
        dropdown: 'team',
      },
    },
    rows: [
      {
        team_name: {
          rendered: 'Flames',
          value: 'Flames',
        },
      },
      {
        team_name: {
          rendered: 'Warriors',
          value: 'Warriors',
        },
      },
      {
        team_name: {
          rendered: 'Saints',
          value: 'Saints',
        },
      },
    ],
  },
  season_filter_123: {
    loading: false,
    columns: ['season'],
    dimensions: ['season'],
    measures: [],
    metadata: {
      filters: {
        input: [],
        output: [
          {
            changed: false,
            initial: true,
            name: 'dropdown',
            urlparam: 'season',
            value: '2019',
          },
        ],
      },
      output_filters: {
        dropdown: 'season',
      },
    },
    rows: [
      {
        team_name: {
          rendered: '2019',
          value: '2019',
        },
      },
      {
        team_name: {
          rendered: '2020',
          value: '2020',
        },
      },
      {
        team_name: {
          rendered: '2021',
          value: '2021',
        },
      },
    ],
  },
}
