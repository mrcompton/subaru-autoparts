create table if not exists parts(
id serial primary key,
part_num text unique,
category text,
name text,
description text,
price decimal,
picture text
);


insert into parts (part_num, category, name, description, price, picture)
values (
'15208AA15A',
'Engine Parts',
'Oil Filter',
'Legacy, Outback. Legacy/Outback. XV Crosstrek. Forester. Impreza. 2.0L. 2013-14. 2010-12. Without hybrid. 2.5L without turbo, 2011-13.',
5.31,
'https://images-na.ssl-images-amazon.com/images/I/71QpMH8TMnL._SY550_.jpg'
);


insert into parts (part_num, category, name, description, price, picture)
values (
'22401AA781',
'Ignition System',
'Spark Plug',
'Without hybrid. 2.5L without turbo. Without turbo, 2011-136.22. Outback 2016-2018.',
16.59,
'https://parts.gillmansubarunorth.com/images/parts/subaru/productimages/fullsize/22401AA781%201.jpg'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'22401AA751',
'Ignition System',
'Spark Plug',
'3.6L. 3.6R 2016-2018',
12.63,
'https://parts.gillmansubarunorth.com/images/parts/subaru/productimages/fullsize/22401AA781%201.jpg'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'22401AA830',
'Ignition System',
'Spark Plug',
'WRX 2.0L. 2016-2018',
19.76,
'https://parts.gillmansubarunorth.com/images/parts/subaru/productimages/fullsize/22401AA781%201.jpg'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'72880AL00A',
'Air Filters',
'Cabin Air Filter',
'Legacy, Outback.',
18.20,
'https://www.subarupartspros.com/media/catalog/product/cache/4/thumbnail/1200x/17f82f742ffe127f42dca9de82fb58b1/s/o/sopcabinairfilter.jpg'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'72880FG000',
'Air Filters',
'Cabin Air Filter',
'WRX, wxr sti. XV Crosstrek. Forester. Impreza.',
18.20,
'https://parts.natewade.com/images/parts/subaru/productimages/fullsize/72880FG000%202.jpg'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'16546AA12A',
'Air Filters',
'Filter Element',
'Forester, Impreza. Legacy/Outback. XV Crosstrek. WRX STI. Tribeca. 3.0L. 3.6L. 2010-12. 2013-14. All models. Without turbo. Without hybrid. 2.5L with turbo. 2.5L, without type ra.',
17.38,
'https://parts.natewade.com/images/parts/subaru/productimages/fullsize/72880FG000%202.jpg'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'16546AA10A',
'Air Filters',
'Filter Element',
'Forester, Impreza. Legacy/Outback. Tribeca. WRX. 3.0L. 2.0L. All models. 2.5L without turbo, 2009-10.',
18.97,
'https://parts.natewade.com/images/parts/subaru/productimages/fullsize/16546AA10A%201.jpg'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'23780AA140',
'Belts & Pulleys',
'Serpentine Belt',
'Legacy, Outback. 2.5L.',
32.96,
'https://dz310nzuyimx0.cloudfront.net/strapr1/188d1ebb449ab42a41d6bcb24754dd80/30a8b56e8b7ce52cec1310d23741d964.png'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'809221150',
'Belts & Pulleys',
'Serpentine Belt',	
'Legacy, Outback. 3.6L.',
19.76,
'https://dz310nzuyimx0.cloudfront.net/strapr1/cf650d4865a9ad514f5fc3468e4585c6/675f2533fd6ea94c51f2d3500355249f.png'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'23780AA111',
'Belts & Pulleys',
'Serpentine Belt',
'Forester. Impreza. WRX. 2.0L. Without turbo.',
32.43,
'https://dz310nzuyimx0.cloudfront.net/strapr1/188d1ebb449ab42a41d6bcb24754dd80/30a8b56e8b7ce52cec1310d23741d964.png'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'13143AA110',
'Engine Parts',
'Timing Chain',
'Legacy, Outback. Legacy/Outback. XV Crosstrek. Forester. Impreza. WRX. BRZ. 2.0L. 2.5L. 2013-14.',
71.24,
'https://dz310nzuyimx0.cloudfront.net/strapr1/188d1ebb449ab42a41d6bcb24754dd80/30a8b56e8b7ce52cec1310d23741d964.png'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'13143AA23A',
'Engine Parts',
'Timing Chain',
'2.5L. 2018',
71.24,
'https://dz310nzuyimx0.cloudfront.net/strapr1/188d1ebb449ab42a41d6bcb24754dd80/30a8b56e8b7ce52cec1310d23741d964.png'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'13143AA061',
'Engine Parts',
'Timing Chain',
'3.6L. Outback.',
71.24,
'https://dz310nzuyimx0.cloudfront.net/strapr1/38783b3b4c888c61a57a77ef0499217c/b9827db83c3f39359b4db06656870dfe.png'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'23300AA71A',
'Starter',
'Starter',
'Legacy, Outback. 2.5l. Auto trans.',
277.16,
'https://parts.natewade.com/images/uploads/SimplePart%20-%20Subaru/fullsize/a_20170608_1014272126.png'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'23300AA860',
'Starter',
'Starter',
'3.6L Outback.',
225.68,
'https://parts.natewade.com/images/uploads/SimplePart%20-%20Subaru/fullsize/a_20170608_1014272126.png'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'23300AA710',
'Starter',
'Starter',
'XV Crosstrek. Forester. Impreza. WRX. Without turbo. 2.0L, auto trans. 2.5L, auto trans.',
415.79,
'https://i.ebayimg.com/images/g/7VEAAOSwPpZaDzUB/s-l300.jpg'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'23700AA91B',
'Alternator',
'Alternator',
'Legacy, Outback. 2.5L.',
341.84,
'https://parts.natewade.com/images/parts/subaru/parts/fullsize/B15_00501125_23700.png'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'23700AA931',
'Alternator',
'Alternator',
'Legacy, Outback. 3.6L.',
480.44,
'https://parts.natewade.com/images/parts/subaru/parts/fullsize/B15_00501125_23700.png'
);

insert into parts (part_num, category, name, description, price, picture)
values (
'23700AA911',
'Alternator',
'Alternator',
'XV Crosstrek. Impreza. WRX. 2.0L. Without turbo. From 10/17/14. Without hybrid.',
480.44,
'https://dz310nzuyimx0.cloudfront.net/strapr1/4dae0d711f8739bad8844a0fd12cd587/112aaf7ecc4b9be06fedc771289043de.png');

insert into parts (part_num, category, name, description, price, picture)
values (
'SOA591U417',
'Wiper & Washer Components',
'Front Wiper Blade - Passenger',
'Front Passenger-Side Blade, Hybrid Wiper Blade - 17',
11.84,
'https://www.subarupartspros.com/media/catalog/product/cache/4/thumbnail/1200x/17f82f742ffe127f42dca9de82fb58b1/s/o/soawiperblades_7.jpg');


insert into parts (part_num, category, name, description, price, picture)
values (
'SOA591B726',
'Wiper & Washer Components',
'Front Wiper Blade - Driver',
'Front Driver-side Blade, Hybrid Wiper Blade - 17',
13.77,
'https://www.subarupartspros.com/media/catalog/product/cache/4/thumbnail/1200x/17f82f742ffe127f42dca9de82fb58b1/s/o/soawiperblades_7.jpg');

insert into parts (part_num, category, name, description, price, picture)
values (
'86542FJ010',
'Wiper & Washer Components',
'Wiper Blade',
'Front Left, Hybrid Wiper Blade - 17. WRX, Crosstrek.',
26.38,
'https://www.subarupartspros.com/media/catalog/product/cache/4/thumbnail/1200x/17f82f742ffe127f42dca9de82fb58b1/s/o/soawiperblades_7.jpg');

insert into parts (part_num, category, name, description, price, picture)
values (
'86542FJ060',
'Wiper & Washer Components',
'Wiper Blade',
'Front Right, Hybrid Wiper Blade - 17. WRX, Crosstrek.',
26.38,
'https://www.subarupartspros.com/media/catalog/product/cache/4/thumbnail/1200x/17f82f742ffe127f42dca9de82fb58b1/s/o/soawiperblades_7.jpg');

insert into parts (part_num, category, name, description, price, picture)
values (
'84920PA000',
'Lights',
'Headlamp Bulb',
'Right Outer, Left Outer',
12.63,
'https://s3.amazonaws.com/rp-part-images/assets/33a92298d33a2f4807e1212c7328139f.jpg');

insert into parts (part_num, category, name, description, price, picture)
values (
'84920KE020',
'Lights',
'Signal Lamp Bulb',
'Left Rear, Left Front, Right Rear, Right Front',
4.73,
'https://dz310nzuyimx0.cloudfront.net/strapr1/3b29e5281cf6367a4d3d89ee796c1e93/f29d1b206a306ef6185212ea7de0627f.png');

insert into parts (part_num, category, name, description, price, picture)
values (
'84920KE030',
'Lights',
'Backup Lamp Bulb',
'Left Rear, Right Rear',
2.96,
'https://dz310nzuyimx0.cloudfront.net/strapr1/2e5ab09f5a7dccf32d7e4d693aded47a/8446eafb529b185d6886bf7ffcdad0e9.png');

insert into parts (part_num, category, name, description, price, picture)
values (
'84912VA030',
'Lights',
'Left Tail Lamp ',
'Lens Body Complete. WRX',
249.04,
'https://parts.subaruofpueblo.com/images/uploads/SimplePart%20-%20Subaru/fullsize/a_20180301_1342317574.png');

insert into parts (part_num, category, name, description, price, picture)
values (
'84912VA020',
'Lights',
'Right Tail Lamp ',
'Lens Body Complete. WRX',
249.04,
'https://i.ebayimg.com/images/g/UOkAAOSwQGhbG4DG/s-l640.jpg');

insert into parts (part_num, category, name, description, price, picture)
values (
'84913VA031',
'Lights',
'Headlamp Housing Left',
'Composite Headlamp, Lens Body Head Lamp Left-Hand. WRX',
279.11,
'https://dz310nzuyimx0.cloudfront.net/strapr1/53a15fb29a2c30ed4444418908feee41/fe8a88d3e24e8d965a3b0b566500666c.png');

insert into parts (part_num, category, name, description, price, picture)
values (
'84913VA021',
'Lights',
'Headlamp Housing Right',
'Composite Headlamp, Lens Body Head Lamp Right-Hand. WRX',
279.11,
'https://dz310nzuyimx0.cloudfront.net/strapr1/53a15fb29a2c30ed4444418908feee41/fe8a88d3e24e8d965a3b0b566500666c.png');
