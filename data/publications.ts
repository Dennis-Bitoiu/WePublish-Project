export interface Publication {
  id: string;
  slug: string;
  name: string;
  coverurl: string;
  publishfrom: string;
  publishuntil: string;
  categories: string[]; // Array of category IDs
}

export const publications: Publication[] = [
  {
    // UUID; Primary key
    id: '41cd137c-6b10-4dce-bdb0-c4d82da074d3',
    // string; unique and should be a web-safe string
    slug: 'action-week-25-2023',
    // string
    name: 'Action week 25 2023',
    // string
    coverurl:
      'https://assets.wepublish.com/variant-versions/1597ede1-57d6-4d7b-bf18-cd465eadabc4/pages/1-thumb.jpg',
    // string; UTC datetime
    publishfrom: '2023-06-20T22:00:00.000Z',
    // string; UTC datetime
    publishuntil: '2023-06-27T21:59:59.000Z',
    // Array<string>; Foreign key to one or more categories
    categories: [],
  },
  {
    id: 'b27afed5-e159-44e6-a3f9-e61671f8b173',
    slug: 'welkoop-zadengids-2023',
    name: 'Welkoop Zadengids 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/5b889bb7-ed65-4406-8394-bb77e6cc66de/pages/1-thumb.jpg',
    publishfrom: '2023-03-27T22:00:00.000Z',
    publishuntil: '2024-05-31T21:59:59.999Z',
    categories: [
      'b4bc1df6-8735-4332-9188-d71d4b5e6d8d',
      '25bed547-099c-4228-b3d1-d555d53eae2d',
    ],
  },
  {
    id: 'd15a9770-3ab1-42ff-93d3-61627c9d13ba',
    slug: 'welkoop-week-25-26-2023',
    name: 'Welkoop week 25-26 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/4b7361d7-6fa5-4729-925b-688c2e9a570e/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-07-02T21:59:59.000Z',
    categories: [
      'b4bc1df6-8735-4332-9188-d71d4b5e6d8d',
      '25bed547-099c-4228-b3d1-d555d53eae2d',
    ],
  },
  {
    id: '4dedee10-af49-44ee-a25d-9c2f95c21955',
    slug: 'zooplus-11-24-juni',
    name: '2023 11-24 juni folders.nl',
    coverurl:
      'https://assets.wepublish.com/variant-versions/13e24e64-ff41-4f1a-9575-fd3b91e24a8b/pages/1-thumb.jpg',
    publishfrom: '2023-06-10T22:00:00.000Z',
    publishuntil: '2023-06-24T21:59:59.999Z',
    categories: ['b4bc1df6-8735-4332-9188-d71d4b5e6d8d'],
  },
  {
    id: '1852082d-d5d3-4265-bfaa-aceb74d47bbd',
    slug: 'groenrijk-week-21-2023-zomermagazine',
    name: 'GroenRijk week 21 2023 Zomermagazine',
    coverurl:
      'https://assets.wepublish.com/variant-versions/00697c0e-77aa-41f6-b82b-0fb086c434c1/pages/1-thumb.jpg',
    publishfrom: '2023-05-16T22:00:00.000Z',
    publishuntil: '2023-08-31T21:59:59.999Z',
    categories: [
      'b4bc1df6-8735-4332-9188-d71d4b5e6d8d',
      '25bed547-099c-4228-b3d1-d555d53eae2d',
    ],
  },
  {
    id: 'd8b24af3-5deb-4d8a-8da7-4267d143097c',
    slug: 'groenrijk-week-25-2023',
    name: 'GroenRijk week 25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/88ce1986-447c-40bf-9cbf-8235ae2fdb3e/pages/1-thumb.jpg',
    publishfrom: '2023-06-20T22:00:00.000Z',
    publishuntil: '2023-06-27T21:59:59.999Z',
    categories: [
      'b4bc1df6-8735-4332-9188-d71d4b5e6d8d',
      '25bed547-099c-4228-b3d1-d555d53eae2d',
    ],
  },
  {
    id: '7df5153e-e560-4dcd-b4db-4daf38e4a593',
    slug: 'pets-place-boerenbond-week-25-28-2023',
    name: 'Pets Place Boerenbond week 25-28 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/8c0c5252-1d4d-4a6e-a766-b4ef7578e05b/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['b4bc1df6-8735-4332-9188-d71d4b5e6d8d'],
  },
  {
    id: '04ecefce-d239-4c4e-8bc2-7e70bcd65e07',
    slug: 'pets-place-week-25-27-2023',
    name: 'Pets Place week 25-27 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/f0466672-1f1c-4181-ad4a-02200ef28715/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['b4bc1df6-8735-4332-9188-d71d4b5e6d8d'],
  },
  {
    id: '5280b3a6-983c-453b-b304-0f5f464d3d82',
    slug: 'tuinmeubelcatalogus-2023',
    name: 'Tuinmeubelcatalogus 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/1e27e48e-c2fa-4aea-9342-c5fd3ac57dcf/pages/1-thumb.jpg',
    publishfrom: '2023-03-22T23:00:00.000Z',
    publishuntil: '2023-08-13T21:59:59.000Z',
    categories: [
      'b4bc1df6-8735-4332-9188-d71d4b5e6d8d',
      '25bed547-099c-4228-b3d1-d555d53eae2d',
    ],
  },
  {
    id: '18b05b2a-f877-4c92-90ee-174a2e4fec97',
    slug: 'barbecuecatalogus-2023',
    name: 'Barbecuecatalogus-2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/ffcc4dbb-fb2f-46eb-bb53-52fba4d8cf56/pages/1-thumb.jpg',
    publishfrom: '2023-05-01T22:00:00.000Z',
    publishuntil: '2023-08-13T21:59:59.000Z',
    categories: [
      'b4bc1df6-8735-4332-9188-d71d4b5e6d8d',
      '25bed547-099c-4228-b3d1-d555d53eae2d',
    ],
  },
  {
    id: '4a195f46-2042-4be6-943c-1f6e7151a436',
    slug: 'jumper-week-25-2023',
    name: 'Jumper week 25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/473b6bfb-adba-47b9-afa0-6eea2acd22b9/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['b4bc1df6-8735-4332-9188-d71d4b5e6d8d'],
  },
  {
    id: '2789817e-c06e-49a2-a0b9-fcadd337b3fb',
    slug: 'totaalbed-week-25-2023',
    name: 'TotaalBED week 25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/9fec372b-1500-42a4-b116-ccff923ef29e/pages/1-thumb.jpg',
    publishfrom: '2023-06-17T22:00:00.000Z',
    publishuntil: '2023-06-24T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '174a5299-7d52-4ff0-82bc-547cd16b4997',
    slug: 'blokker-week-15-2023-magazine',
    name: 'Blokker week 15 2023 Magazine',
    coverurl:
      'https://assets.wepublish.com/variant-versions/5deffea5-1692-448c-a974-fce9d8d1921a/pages/1-thumb.jpg',
    publishfrom: '2023-04-09T22:00:00.000Z',
    publishuntil: '2024-04-10T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: 'b90fe3a2-388b-409e-a401-165993fc22d2',
    slug: 'blokker-zomer-magazine-2023',
    name: 'Blokker zomer magazine 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/c5e8782a-87cd-4a9a-ad9a-ac5a0eed94ff/pages/1-thumb.jpg',
    publishfrom: '2023-05-18T22:00:00.000Z',
    publishuntil: '2023-12-31T22:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: 'ac33344e-5f9e-4e7b-8c22-136987e7b9d6',
    slug: 'blokker-week-25-2023',
    name: 'Blokker week 25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/8ae77f21-a2b6-4c16-a20b-82064c280736/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.000Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '660aaaa0-b68f-4be0-bcbb-72b7db903bd5',
    slug: 'trendhopper-week-12-13-2023',
    name: 'Trendhopper keukens 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/c125a79c-f67e-4df4-aa2c-ae6b74a4b452/pages/1-thumb.jpg',
    publishfrom: '2023-03-19T23:00:00.000Z',
    publishuntil: '2023-07-01T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '954ead66-8264-4676-bb43-2d288226f20d',
    slug: 'trendhopper-week-21-2023',
    name: 'Trendhopper week 21 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/f402c7a7-f382-453f-bc70-e3d5f1a0d8e1/pages/1-thumb.jpg',
    publishfrom: '2023-05-16T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: 'd0f6a875-7d19-46bc-9ed0-5a77227fda4f',
    slug: 'budget-home-store-week-15-2023',
    name: 'Budget Home Store week 15 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/1380f07e-ab46-489e-aaed-048a66e94edd/pages/1-thumb.jpg',
    publishfrom: '2023-04-06T22:00:00.000Z',
    publishuntil: '2023-07-31T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '2f08a0e5-5833-4325-b946-4645c8f386ec',
    slug: 'budget-home-store-week-20-25-2023',
    name: 'Budget Home Store week 20-25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/b9db6451-bbe7-4661-9276-ef4c3206deed/pages/1-thumb.jpg',
    publishfrom: '2023-05-20T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: 'a72ad00d-d863-495d-8902-ef99eeae2f64',
    slug: 'woonsquare-week-25-2023-woonfolder',
    name: 'Woonsquare week 25 2023 woonfolder',
    coverurl:
      'https://assets.wepublish.com/variant-versions/de9b2d4d-dd4c-4783-b25a-830d0b3ad6cc/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-24T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '6b118833-51d3-4b8a-8756-7009cb8f52dd',
    slug: 'woonsquare-week-25-2023-slaapfolder',
    name: 'Woonsquare week 25 2023 slaapfolder',
    coverurl:
      'https://assets.wepublish.com/variant-versions/cacb2528-fbdb-4133-b5b2-7d4da8e21e3a/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-24T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '54624c74-8dd8-4aed-b0d0-71d67e85f19c',
    slug: 'xenos-digispecial-geslaagd-wk-22-25-2023',
    name: 'Xenos digispecial Geslaagd wk 22-25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/d6d15dbe-94b9-4ade-9ecc-c3b04e4babbd/pages/1-thumb.jpg',
    publishfrom: '2023-05-27T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.000Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '091ad6b9-26c8-483d-8a48-0e1958985d48',
    slug: 'xenos-balkon-tuin-wk-23-26-2023-01',
    name: 'Xenos Balkon & Tuin wk 23-26 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/294d707d-f3e3-433c-a616-23b87fe14aa6/pages/1-thumb.jpg',
    publishfrom: '2023-06-03T22:00:00.000Z',
    publishuntil: '2023-07-02T21:59:59.000Z',
    categories: [
      '4e8abc3b-6f65-4538-b771-b1da719d3055',
      '25bed547-099c-4228-b3d1-d555d53eae2d',
    ],
  },
  {
    id: '1b65d439-e9e7-46b8-8501-4f9f8c0e6368',
    slug: 'xenos-week-25-26-2023',
    name: 'Xenos week 25-26 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/7dc800ac-804b-41c8-b685-e1b30ab1f317/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-07-02T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '7860710a-a960-4ee4-9356-689652a23a42',
    slug: 'xenos-week-25-26-2023-v1',
    name: 'Xenos week 25-26 2023 V1',
    coverurl:
      'https://assets.wepublish.com/variant-versions/e8213a55-ecbf-447d-a3c4-50067fbd48a6/pages/1-thumb.jpg',
    publishfrom: '2023-06-24T22:00:00.000Z',
    publishuntil: '2023-07-02T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '76258acf-4be7-4e32-9e5e-60475085897d',
    slug: 'xenos-zomer-festival-wk-25-35-2023',
    name: 'Xenos Zomer Festival wk 25-35 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/49dfb748-5509-4f59-a772-d81220b7e8c2/pages/1-thumb.jpg',
    publishfrom: '2023-06-15T22:00:00.000Z',
    publishuntil: '2023-09-03T21:59:59.000Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '1c2f9d9b-2b9d-4a21-b5b9-2b1dc098249e',
    slug: 'profijt-meubel-week-26-2023',
    name: 'Profijt Meubel week 26 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/b949f2bb-6173-4af7-a5e1-876eae0eafb3/pages/1-thumb.jpg',
    publishfrom: '2023-06-22T22:00:00.000Z',
    publishuntil: '2023-07-01T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '5e333712-c96b-4d1a-a197-0d3da1ff8110',
    slug: 'inhouse-woonmagazine-voorjaar-2023',
    name: 'INHOUSE Woonmagazine voorjaar 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/aadee891-4ead-4930-93db-2826bc6cb9ae/pages/1-thumb.jpg',
    publishfrom: '2023-05-13T22:00:00.000Z',
    publishuntil: '2023-10-01T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '1ac2fd94-4f15-47af-9db0-b26098985ea7',
    slug: 'inhouse-week-25-2023',
    name: 'INHOUSE week 25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/a39c7aad-5e49-41f1-9a59-337a7ddee02f/pages/1-thumb.jpg',
    publishfrom: '2023-06-17T22:00:00.000Z',
    publishuntil: '2023-06-24T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '5280b3a6-983c-453b-b304-0f5f464d3d82',
    slug: 'tuinmeubelcatalogus-2023',
    name: 'Tuinmeubelcatalogus 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/1e27e48e-c2fa-4aea-9342-c5fd3ac57dcf/pages/1-thumb.jpg',
    publishfrom: '2023-03-22T23:00:00.000Z',
    publishuntil: '2023-08-13T21:59:59.000Z',
    categories: [
      '4e8abc3b-6f65-4538-b771-b1da719d3055',
      '25bed547-099c-4228-b3d1-d555d53eae2d',
    ],
  },
  {
    id: '18b05b2a-f877-4c92-90ee-174a2e4fec97',
    slug: 'barbecuecatalogus-2023',
    name: 'Barbecuecatalogus-2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/ffcc4dbb-fb2f-46eb-bb53-52fba4d8cf56/pages/1-thumb.jpg',
    publishfrom: '2023-05-01T22:00:00.000Z',
    publishuntil: '2023-08-13T21:59:59.000Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: 'aca19b46-5dbf-4f1b-acb1-0e439347bede',
    slug: 'karwei-week-51-2022-vtwonen-special',
    name: 'Karwei week 51 2022 vtwonen special',
    coverurl:
      'https://assets.wepublish.com/variant-versions/981c2a30-eb8f-47d5-b5c1-f9bfb3633c33/pages/1-thumb.jpg',
    publishfrom: '2022-12-21T23:00:00.000Z',
    publishuntil: '2024-12-31T22:59:59.000Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '952be995-23ef-4b8a-977a-ce6b044f7389',
    slug: 'karwei-week-4-2023-vt-wonen-special',
    name: 'Karwei vtwonen',
    coverurl:
      'https://assets.wepublish.com/variant-versions/8e2918ba-b170-4d77-9908-6ac3535f49c0/pages/1-thumb.jpg',
    publishfrom: '2023-01-22T23:00:00.000Z',
    publishuntil: '2024-01-23T22:59:59.000Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '5252c390-75c8-4a78-b41d-a70b74b67e17',
    slug: 'karwei-week-25-2023',
    name: 'folder week 25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/5d0d6c70-1a03-4674-8cfc-bc8ef01889b1/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.000Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: 'b3536099-b7ff-4615-b890-ee3d39eb994a',
    slug: 'keukendepot-week-21-2023',
    name: 'Keukendepot week 21 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/169fc0e7-0c32-40ff-9d2d-6b0152e47ec5/pages/1-thumb.jpg',
    publishfrom: '2023-05-21T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '51b8cf63-5b63-4d04-9a42-0e7ea00366ff',
    slug: 'folder-lampen-zomer-2023',
    name: 'Lampen inspiratiegids zomer 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/98ba2a4c-20a5-421c-ae55-904d54bcbbad/pages/1-thumb.jpg',
    publishfrom: '2023-05-21T22:00:00.000Z',
    publishuntil: '2023-09-30T21:59:59.000Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '359ce79d-4774-4f84-934d-5eb06f8754d0',
    slug: 'ventilatoren-folder-juni',
    name: 'Ventilatoren & lampen inspiratiegids',
    coverurl:
      'https://assets.wepublish.com/variant-versions/81f12f39-652e-4c41-99a1-a225da9fff72/pages/1-thumb.jpg',
    publishfrom: '2023-06-17T22:00:00.000Z',
    publishuntil: '2023-06-24T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '68aebe91-4fc5-4817-a351-af95a1117ad8',
    slug: 'pronto-wonen-week-25-2023-2',
    name: 'Pronto Wonen week 25 2023-2',
    coverurl:
      'https://assets.wepublish.com/variant-versions/2da51a37-623a-46a7-96f8-7215771890d2/pages/1-thumb.jpg',
    publishfrom: '2023-06-17T22:00:00.000Z',
    publishuntil: '2023-06-24T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '6ad86083-5e6e-48d1-b583-539fdbc905d2',
    slug: 'seats-and-sofas-week-22-27-2023',
    name: 'Seats and Sofas week 22-27 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/737f5aba-85b9-418c-a307-852881855af2/pages/1-thumb.jpg',
    publishfrom: '2023-05-28T22:00:00.000Z',
    publishuntil: '2023-07-02T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '7bc328f0-92c5-4d50-96bb-b1a566be8c95',
    slug: 'superkeukens-week-21-2023',
    name: 'Superkeukens week 21 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/62d73b64-315f-4138-9913-90606f4687ed/pages/1-thumb.jpg',
    publishfrom: '2023-05-21T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['4e8abc3b-6f65-4538-b771-b1da719d3055'],
  },
  {
    id: '1852082d-d5d3-4265-bfaa-aceb74d47bbd',
    slug: 'groenrijk-week-21-2023-zomermagazine',
    name: 'GroenRijk week 21 2023 Zomermagazine',
    coverurl:
      'https://assets.wepublish.com/variant-versions/00697c0e-77aa-41f6-b82b-0fb086c434c1/pages/1-thumb.jpg',
    publishfrom: '2023-05-16T22:00:00.000Z',
    publishuntil: '2023-08-31T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: '04ecefce-d239-4c4e-8bc2-7e70bcd65e07',
    slug: 'pets-place-week-25-27-2023',
    name: 'Pets Place week 25-27 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/f0466672-1f1c-4181-ad4a-02200ef28715/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: '5280b3a6-983c-453b-b304-0f5f464d3d82',
    slug: 'tuinmeubelcatalogus-2023',
    name: 'Tuinmeubelcatalogus 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/1e27e48e-c2fa-4aea-9342-c5fd3ac57dcf/pages/1-thumb.jpg',
    publishfrom: '2023-03-22T23:00:00.000Z',
    publishuntil: '2023-08-13T21:59:59.000Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: '18b05b2a-f877-4c92-90ee-174a2e4fec97',
    slug: 'barbecuecatalogus-2023',
    name: 'Barbecuecatalogus-2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/ffcc4dbb-fb2f-46eb-bb53-52fba4d8cf56/pages/1-thumb.jpg',
    publishfrom: '2023-05-01T22:00:00.000Z',
    publishuntil: '2023-08-13T21:59:59.000Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: 'd6696523-2588-47e0-9e45-2766387c4f75',
    slug: 'folder-week-25-2023-nl-dyn',
    name: 'Folder week 25 2023 NL dyn',
    coverurl:
      'https://assets.wepublish.com/variant-versions/e32b0610-5309-48be-83c1-5253dda37adb/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.000Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: 'b27afed5-e159-44e6-a3f9-e61671f8b173',
    slug: 'welkoop-zadengids-2023',
    name: 'Welkoop Zadengids 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/5b889bb7-ed65-4406-8394-bb77e6cc66de/pages/1-thumb.jpg',
    publishfrom: '2023-03-27T22:00:00.000Z',
    publishuntil: '2024-05-31T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: 'd15a9770-3ab1-42ff-93d3-61627c9d13ba',
    slug: 'welkoop-week-25-26-2023',
    name: 'Welkoop week 25-26 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/4b7361d7-6fa5-4729-925b-688c2e9a570e/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-07-02T21:59:59.000Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: '4dedee10-af49-44ee-a25d-9c2f95c21955',
    slug: 'zooplus-11-24-juni',
    name: '2023 11-24 juni folders.nl',
    coverurl:
      'https://assets.wepublish.com/variant-versions/13e24e64-ff41-4f1a-9575-fd3b91e24a8b/pages/1-thumb.jpg',
    publishfrom: '2023-06-10T22:00:00.000Z',
    publishuntil: '2023-06-24T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: 'd8b24af3-5deb-4d8a-8da7-4267d143097c',
    slug: 'groenrijk-week-25-2023',
    name: 'GroenRijk week 25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/88ce1986-447c-40bf-9cbf-8235ae2fdb3e/pages/1-thumb.jpg',
    publishfrom: '2023-06-20T22:00:00.000Z',
    publishuntil: '2023-06-27T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: '7df5153e-e560-4dcd-b4db-4daf38e4a593',
    slug: 'pets-place-boerenbond-week-25-28-2023',
    name: 'Pets Place Boerenbond week 25-28 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/8c0c5252-1d4d-4a6e-a766-b4ef7578e05b/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: '4fe8ed14-db6d-4892-b0f7-3af0a9aa682c',
    slug: 'van-der-garde-tuinmeubelen-week-24-25-2023',
    name: 'Van der Garde Tuinmeubelen week 24-25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/754fb539-0965-44d1-beb9-0ce5058f56cd/pages/1-thumb.jpg',
    publishfrom: '2023-06-11T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: '2eaeda02-b4d1-4f70-8a93-347f34c89eac',
    slug: 'kluswijs-week-16-2023',
    name: 'KlusWijs week 16 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/5236533e-b1b2-4e15-9eaa-d321e531f9c6/pages/1-thumb.jpg',
    publishfrom: '2023-04-16T22:00:00.000Z',
    publishuntil: '2023-08-31T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: 'eb0246b2-bbc8-466c-a192-09c9fdfe7bf3',
    slug: 'kluswijs-week-25-2023',
    name: 'KlusWijs week 25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/a381aaee-4a8e-4a2f-91a2-180acf98babf/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: '1cc21b7d-d8e4-4fc8-8519-d41f2ac35657',
    slug: 'huisdiervoordeelshop-week-22-26-2023',
    name: 'Huisdiervoordeelshop week 22-26 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/b68517a0-8bf6-4f1d-9189-80d84fb03240/pages/1-thumb.jpg',
    publishfrom: '2023-05-24T22:00:00.000Z',
    publishuntil: '2023-06-27T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: '4a195f46-2042-4be6-943c-1f6e7151a436',
    slug: 'jumper-week-25-2023',
    name: 'Jumper week 25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/473b6bfb-adba-47b9-afa0-6eea2acd22b9/pages/1-thumb.jpg',
    publishfrom: '2023-06-18T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: 'c2bbb89a-b82a-4f43-8b07-1a6cd1acc425',
    slug: 'tuinmeubelland-week-24-25-2023',
    name: 'Tuinmeubelland week 24-25 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/f66b4985-6d8b-44f3-9149-eb8608032717/pages/1-thumb.jpg',
    publishfrom: '2023-06-11T22:00:00.000Z',
    publishuntil: '2023-06-25T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
  {
    id: '668712e4-f17c-4cee-a1de-ecdf0c1c986b',
    slug: 'kees-smit-tuinmeubelen-lifestyle-magazine-2023',
    name: 'Kees Smit Tuinmeubelen lifestyle magazine 2023',
    coverurl:
      'https://assets.wepublish.com/variant-versions/125f15a9-5f58-42bf-841d-4a031b74269c/pages/1-thumb.jpg',
    publishfrom: '2023-02-26T23:00:00.000Z',
    publishuntil: '2023-08-31T21:59:59.999Z',
    categories: ['25bed547-099c-4228-b3d1-d555d53eae2d'],
  },
];
