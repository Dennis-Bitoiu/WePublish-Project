export interface Category {
  id: string;
  name: string;
  slug: string;
  iconurl: string;
  activefrom: string | null;
  activeuntil: string | null;
  createdat?: string;
  updatedat?: string;
}

export const categories: Category[] = [
  {
    // UUID; Primary key
    id: 'a82b285c-8e69-4c60-955d-1dbe3ea16453',
    // string
    name: 'Weekenddeals',
    // string; unique
    slug: 'weekenddeals',
    // string
    iconurl:
      'https://assets.wepublish.com/folders-nl/categories/icons/b1ba56c8-ec68-44bf-a15b-bd85eab08945_weekenddeals.svg',
    // string | null; ISO 8601 string. Format: "DD-MM"
    activefrom: null,
    // string | null; ISO 8601 string. Format: "DD-MM"
    activeuntil: null,
    // string; UTC datetime
    createdat: '2022-02-22T12:45:35.698Z',
    // string; UTC datetime
    updatedat: '2023-06-12T07:28:54.741Z',
  },
  {
    id: 'd994edfa-2c53-4945-89fb-36e228717bf6',
    name: 'Easter',
    slug: 'easter',
    iconurl:
      'https://assets.wepublish.com/folders-nl/categories/icons/dc8c2375-1b62-43a8-a779-b6129fa30e6a_pasen.svg',
    activefrom: '02-22',
    activeuntil: '03-31',
    createdat: '2022-02-22T12:53:11.784Z',
    updatedat: '2023-04-11T06:40:46.215Z',
  },
  {
    id: '1b009fc1-4200-4d53-9259-c52c584d8062',
    name: 'Valentine',
    slug: 'valentine',
    iconurl:
      'https://assets.wepublish.com/folders-nl/categories/icons/812d5761-0e99-4a4f-8455-74d9031ece6e_valentijnsdag.svg',
    activefrom: '02-07',
    activeuntil: '02-14',
    createdat: '2022-02-22T12:53:43.891Z',
    updatedat: '2023-02-15T09:36:16.052Z',
  },
  {
    id: '2795f393-4ede-4364-910a-1f71d9591b32',
    name: 'Christmas',
    slug: 'christmas',
    iconurl:
      'https://assets.wepublish.com/folders-nl/categories/icons/bf63b767-9474-430a-9b1a-ce1894fa6a7b_kerst.svg',
    activefrom: '12-01',
    activeuntil: '12-26',
    createdat: '2022-12-06T09:44:53.664Z',
    updatedat: '2023-01-02T08:26:14.305Z',
  },
  {
    id: '927023eb-7f8d-42f5-a9d9-fe626d27696c',
    name: 'Black Friday',
    slug: 'black-friday',
    iconurl:
      'https://assets.wepublish.com/folders-nl/categories/icons/3c62dedf-9fe0-4ce0-9396-84fd8f0da0ac_black-friday.svg',
    activefrom: '11-15',
    activeuntil: '11-26',
    createdat: '2022-02-22T12:50:46.187Z',
    updatedat: '2022-11-29T07:56:11.684Z',
  },
  {
    id: '4e8abc3b-6f65-4538-b771-b1da719d3055',
    name: 'Living',
    slug: 'living',
    iconurl:
      'https://assets.wepublish.com/folders-nl/categories/icons/cf5ae3a2-0cf5-49b5-89b9-a943e3e919e7_wonen.svg',
    activefrom: null,
    activeuntil: null,
    createdat: '2023-02-22T12:45:43.680Z',
    updatedat: '2023-03-01T08:39:59.187Z',
  },
  {
    id: 'b4bc1df6-8735-4332-9188-d71d4b5e6d8d',
    name: 'Animals',
    slug: 'animals',
    iconurl:
      'https://assets.wepublish.com/folders-nl/categories/icons/97571618-51e7-4935-8568-afcb983eb819_dierendag.svg',
    activefrom: null,
    activeuntil: null,
    createdat: '2022-02-22T12:51:12.349Z',
    updatedat: '2022-10-05T07:31:52.748Z',
  },
  {
    id: '25bed547-099c-4228-b3d1-d555d53eae2d',
    name: 'Garden',
    slug: 'garden',
    iconurl:
      'https://assets.wepublish.com/folders-nl/categories/icons/34c2e66d-84ab-465b-89b2-1d30803581b4_tuinieren.svg',
    activefrom: null,
    activeuntil: null,
    createdat: '2022-02-22T12:45:07.927Z',
    updatedat: '2022-05-11T10:08:34.549Z',
  },
  {
    id: '6c2a7a6e-a81e-4d81-b6c6-f5e2519d1e79',
    name: 'Wintersport',
    slug: 'wintersport',
    iconurl:
      'https://assets.wepublish.com/folders-nl/categories/icons/0dce1982-dc68-479b-961a-5d0d1fe9704a_wintersport.svg',
    activefrom: '12-01',
    activeuntil: '03-25',
    createdat: '2023-02-22T12:54:03.568Z',
    updatedat: '2023-03-16T13:00:08.053Z',
  },
  {
    id: '52fee2bf-b103-41db-b87c-bde2d981f663',
    name: 'Spring',
    slug: 'spring',
    iconurl:
      'https://assets.wepublish.com/folders-nl/categories/icons/2cf140d0-39d1-4799-ac2c-246cd84d66ad_lente.svg',
    activefrom: '03-01',
    activeuntil: '05-31',
    createdat: '2022-02-22T12:52:27.674Z',
    updatedat: '2022-03-16T12:59:20.073Z',
  },
];
