/*{
    "id": "4da7de74-6672-40ad-8e85-99f793d05160",
    "email": "yyerby0@xrea.com",
    "poste": "Research Associate",
    "entreprise": "Yadel",
    "ville": "San Ramon",
    "codePostal": "1658",
    "rue": "Bunker Hill",
    "numeroRue": "30",
    "entreprisePhoto": "https://robohash.org/etsitdolore.png?size=50x50&set=set1",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "date": "2025-01-30",
    "telephone": "+63 176 805 8041",
    "salaireAnnuel": 81365
  },*/
export type job = {
  id: string;
  email: string;
  poste: string;
  entreprise: string;
  ville: string;
  codePostal: string | null;
  rue: string;
  numeroRue: string;
  entreprisePhoto: string;
  description: string;
  date: string;
  telephone: string;
  salaireAnnuel: number;
};
