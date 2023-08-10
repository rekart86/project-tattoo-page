export const menuItems = [
	{
		title: 'Bemutatkozás',
		url: '/',
	},
	{
		title: 'Szolgáltatások',
		url: '/szolgaltatasok',
		submenu: [
			{
				title: 'Tetoválás',
				url: '/tetovalas',
				submenu: [
					{
						title: 'Tetoválás áraink',
						url: '/tetovalas-arak',
					},
					{
						title: 'Tetoválás galeria, stilusok',
						url: '/tetovalas-galeria',
					},
					{
						title: 'Tetoválók',
						url: '/tetovalok',
					},
					{
						title: 'Tetoválás ápolása',
						url: '/tetovalas-apolas',
					},
				],
			},
			{
				title: 'Lézeres tetoválás eltávolítás',
				url: '/tetovalas-eltavolitas',
			},
			{
				title: 'Piercing',
				url: '/piercing',
				submenu: [
					{
						title: 'Piercing fajtak',
						url: '/piercing-fajtak',
					},
					{
						title: 'Piercing ápolása',
						url: '/piercing-apolas',
					},
					{
						title: 'Piercing árak',
						url: '/piercing-ar',
					},
					{
						title: 'Microdermal',
						url: '/microdermal',
						submenu: [
							{
								title: 'Microdermal ápolása',
								url: '/microdermal-apolasa',
							},
							{
								title: 'Microdermal ár',
								url: '/microdermal-ar',
							},
						],
					},
				],
			},
			{
				title: 'SEO',
				url: '/seo',
			},
		],
	},
	{
		title: 'Galéria',
		url: '/galeria',
		submenu: [
		     {
			      title: 'Képek',
			      url: '/kepek',
			 },
			]	 
	},
];
