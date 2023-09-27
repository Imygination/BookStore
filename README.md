# PairProject_Kel7
Ecomerce Book Store

Phase 1 Pair Project Themes


Overview

Setiap Team Pair Project akan mendapatkan tema challenge yang ditentukan oleh instruktur. Silakan tanyakan kepada buddy instruktur bila kamu belum mendapat tema challenge. 

Requirement Level Database

1.	Schema Table (ERD)
2.	Terdapat entitas/table wajib yaitu users dengan attribute yang harus ada:
a.	email
b.	password
c.	role
3.	Memiliki 3 jenis asosiasi yang berbeda:
a.	One to One 
b.	One to Many
c.	Many to Many
4.	Membuat migration
5.	Membuat migration tambahan (add column, rename column, remove column, add constraint, dsb)
6.	Membuat seeder (minimal 1)

Requirement Routes

1.	Minimal terdapat 2 route GET dan 1 route POST
2.	Terdapat route untuk logout


Requirement Aplikasi

1.	Terdapat fitur search atau sort (menggunakan OP dari sequelize)
2.	Terdapat static method dan instance method dan getter di model
3.	Menggunakan berbagai macam validasi dari sequelize dan mengolahnya sehingga tampil pada page (lebih dari 1)
4.	Menggunakan method-method sequelize yang bertujuan untuk CRUD
5.	Terdapat hooks
6.	Membuat dan menggunakan helper
7.	Menggunakan mekanisme promise chaining


Requirement Pages

1.	Landing page (menggambarkan project)
2.	Register & login page
3.	Memiliki 1 page yang menampilkan data gabungan dari 2 table atau lebih (gunakan eager loading dari sequelize)


Requirement Explore

1.	Membuat sistem login dengan middleware, session & bcryptjs
2.	Membuat fitur MVP (fitur unik dengan menggunakan package yang belum pernah dibahas saat lecture)


Tema Pair project

Berikut adalah list entitas/tabel sesuai dengan tema terkait. Kamu boleh menambahkan table maupun field lainnya bila memang dibutuhkan. Setiap tema harus mengandung minimal  masing-masing 1 asosiasi (1 to 1, 1 to M, and M to M).

Entitas/Table User pasti dimiliki oleh setiap tema. List field user:

User
●	id
●	username:string (optional)
●	email:string  (validation: required, uniq, email format)
●	password:string  (validation: required, length min 8)
●	role:string

Berikut list tema beserta entitas (table) yang terkait dan hanyalah sebagai panduan tidak harus sama persis. 
1.	Social Media(Contoh:facebook.com, twitter.com, instagram.com)
a.	Posts  (entitas utama)
●	id 
●	title : string (validation: required)
●	content : text (validation: required)
●	imgUrl: string 
●	createdAt : date
●	updatedAt : date
●	tagId
●	userId
b.	Tags
●	Id
●	name: string (validation: required)
●	createdAt : date
●	updatedAt : date

2.	Ecommerce Toko (Contoh tokopedia,shopee)
a.	Products (entitas utama)
●	Id
●	name:string (validation: required)
●	description:string (validation: required)
●	price:integer  (validation: required, min price (bebas))
●	categoryId
●	userId
●	createdAt : date
●	updatedAt : date
B. Categories
●	Id
●	name: string  (validation: required)
●	createdAt : date
●	updatedAt : date

3.	Education Technology(Contoh:RuangGuru, Udemy)
a.	Courses (entitas utama)
●	Id
●	name:string (validation: required)
●	description:string (validation: required)
●	duration:integer  (validation: required, min duration (bebas))
●	categoryId
●	userId
●	createdAt : date
●	updatedAt : date
b.	Categories
●	Id
●	name: string  (validation: required)
●	createdAt : date
●	updatedAt : date


4.	Health Technology (Halodoc, Alodok)
a.	Disease (entitas utama)
●	Id
●	name: string (validation: required)
●	description: text (validation: required)
●	level: integer (validation: min rating 1)
●	SymtompId
●	userId
●	createdAt : date
●	updatedAt : date
b.	Symptom
●	Id
●	name: string (validation: required)
●	createdAt : date
●	updatedAt : date
5.	Finance Technology (Ajaib, Stockbit, Binance)
a.	Investment (entitas utama)
●	id
●	name: string (validation: required)
●	description: text  (validation: required)
●	companyId
●	userId
●	InvestmentType: string (example: “low risk/ high risk”) (validation: required)
●	amount: integer (validation: required, min amount (bebas))
●	createdAt : date
●	updatedAt : date
b.	Company
●	id
●	name: string (validation: required)
●	companyLogo: string (url link for company logo/image) (validation: required)
●	location: string (validation: required)
●	email: string
●	description string (validation: required)


6.	On Demand App (Gojek, Grab, Others)
a.	Item (entitas utama)
●	id
●	name: string (validation: required)
●	description: string (validation: required)
●	price: integer (validation: required, min price (bebas))
●	imgUrl: string (validation: required)
●	userId
●	categoryId
●	createdAt : date
●	updatedAt : date
b.	Category
●	Id
●	name: string (validation: required)
●	createdAt : date
●	updatedAt : date









































