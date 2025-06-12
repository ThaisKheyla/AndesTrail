create database andestrail;

use andestrail;

create table usuario (
	id int primary key auto_increment,
	nome varchar(50),
	email varchar(50),
	senha varchar(50)
);

select * from usuario;

create table pais (
    id int primary key auto_increment,
    nome varchar(100) not null,
    descricao text not null,
    imagem_url text not null
);

create table recomendacoes (
  id int primary key auto_increment,
  fk_usuario int,
  pais varchar(100),
  lugares text,
  data_recomendacao timestamp default current_timestamp
);

create table comentario (
    id int auto_increment primary key,
    id_usuario int,
    nome varchar(100),
    email varchar(100),
    pais varchar(100),
    texto text,
    data_comentario datetime default current_timestamp,
    foreign key (id_usuario) references usuario(id)
);

create table perfil (
    id int primary key auto_increment,
    fk_usuario int unique,
    imagem_url text,
    interesses text,
    foreign key (fk_usuario) references usuario(id)
);

insert into pais (nome, descricao, imagem_url) values
('argentina', 'conhecida por suas paisagens deslumbrantes, como a patagônia e as cataratas do iguaçu.', 'https://th.bing.com/th/id/R.7a75b7333112450e5a38d1c1016c010e?rik=Wg9dEc6wc2x8Xg&riu=http%3a%2f%2fwww.clicknessa.com.br%2fimgbanco%2fIMG_ARGENTINA_001.JPG&ehk=D3SyfaDjfqU1Kmnu8HJAi05EEcdPE56DzK4O8xYn5Bc%3d&risl=&pid=ImgRaw&r=0'),
('bolívia', 'lar do salar de uyuni, o maior deserto de sal do mundo, e rica cultura indígena.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVcRDGTIdmv3rY4JvRDRLTqmaBxjwD3lMCA&s'),
('brasil', 'famoso por suas praias tropicais, a floresta amazônica e o cristo redentor.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFb7FNWfwg-fEPAei7UvY78ayXWO_bVhSsA&s'),
('chile', 'estende-se dos desertos do norte às geleiras do sul, com paisagens variadas.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pDcwvX_enjIx7DVY_69MFlBxgV6pcKQJaQ&s'),
('colômbia', 'conhecida por suas cidades coloniais, café de alta qualidade e diversidade cultural.', 'https://viagemeturismo.abril.com.br/wp-content/uploads/2022/11/ricardo-gomez-angel-L6T_6Rp2iEk-unsplash.jpg?crop=1&resize=1212,909'),
('costa rica', 'destaca-se por sua biodiversidade, florestas tropicais e praias paradisíacas.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStS_UBMuoJX0Af9L-gaLW1tm2A8n6I5jjWNg&s'),
('cuba', 'famosa por sua arquitetura colonial, música vibrante e praias caribenhas.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7whvzPyu6hqt-G_tIqVZ6oQG860Ojw4_t6w&s'),
('equador', 'lar das ilhas galápagos e rica em cultura indígena e biodiversidade.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6k9XJoe7X5fFAk2nEscnhNdB0n-NAyqjBQ&s'),
('el salvador', 'conhecido por suas praias para surfe e sítios arqueológicos maias.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jFeBnxBQc2bfyCCog3bbsGrlAFmtvU8yKA&s'),
('guatemala', 'famosa por suas ruínas maias, como tikal, e o lago atitlán.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IrqZrpC6oHL3vE7BYr9SeUN7Q_DsL9_VuQ&s'),
('haiti', 'rico em cultura afro-caribenha e história revolucionária.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiw7Z8Z-UBytGZbSomlA0Nf1fL_d7ltSzSnA&s'),
('honduras', 'conhecida por suas ruínas maias em copán e belas praias no caribe.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSze7M2t56KMzAzpzI5EdEO-p2Q321LPoJAig&s'),
('méxico', 'famoso por suas pirâmides astecas e maias, culinária e praias.', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/14/db/9b/caption.jpg?w=1200&h=-1&s=1'),
('nicarágua', 'lar de vulcões ativos, lagos e cidades coloniais como granada.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFz5UgAnJUwKjvxjcp7EuKyKDiGZZhIsyL2w&s'),
('panamá', 'conhecido pelo canal do panamá e rica biodiversidade.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WpCzEmtJWY6OEU5cHzQMK-6CHnpCbBzvEg&s'),
('paraguai', 'destaca-se por sua cultura guarani e paisagens naturais.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uqkSLX_bw2deLZP_bI7DOSSnOT8LHJIg_Q&s'),
('peru', 'famoso por machu picchu, a civilização inca e a culinária andina.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVjdR2NNNiXSAEGQqYs-WgS7tLV3hdknCeg&s'),
('república dominicana', 'conhecida por suas praias caribenhas e resorts all-inclusive.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-vyxhQ8UY1PCk-WrqJQXMwsnf3S54YPl7g&s'),
('uruguai', 'famoso por suas praias em punta del este e cultura relaxada.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mwmfpFIB8tzcYBf47QpM-waKtFbUruR9vg&s');

select * from pais;

create table resultados_quiz (
    id int auto_increment primary key,
    usuario varchar(255) not null,
    acertos int not null,
    erros int not null
);

select * from resultados_quiz;

create table interesses (
    id int auto_increment primary key,
    pais varchar(255) not null,
    imagem varchar(255) not null
);

select * from interesses;

create table planejamentos (
    id int auto_increment primary key,
    destino varchar(100) not null,
    data_ida date not null,
    data_volta date not null,
    orcamento decimal(10,2) not null
);

select * from planejamentos;
