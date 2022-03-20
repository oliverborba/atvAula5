import React, { } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import FlatComponent from './components/FlatComponent';

export default function Tela1() {

  const data = [
    {
      key: '0',
      filme: 'Scooby! O Filme',
      ano: 2020,
      estilo: 'Comédia',
      direcao: 'Tony Cervone',
      image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg',
      descricao: 'Historia da origem de como Salcicha e Scooby se Conheceram',
    },
    {
      key: '1',
      filme: 'Doce Entardecer',
      ano: 2021,
      estilo: 'Drama',
      direcao: 'Jacek Borcuch',
      image: 'https://assets.caixabelasartes.com.br/wp-content/uploads/2020/03/cartaz-doce-entardecer.jpg',
      descricao: 'Maria, uma mãe de família, começa a se envolver secretamente com um jovem imigrante egípcio.',
    },
    {
      key: '2',
      filme: 'Sonic 2 - O Filme',
      ano: 2022,
      estilo: 'Ação',
      direcao: 'Jeff Fowler',
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRV7IVERTAcWspYVVwYvctl7JU2A35X6Ab3eBqbaeV6H_yUJin_',
      descricao: 'O Dr. Robotnik retorna à procura de uma esmeralda mística que tem o poder de destruir civilizações. Para detê-lo, Sonic se une a seu antigo parceiro, Tails, e parte em uma jornada para encontrar a joia antes que ela caia em mãos erradas.',
    },
    {
      key: '3',
      filme: 'Venom: Tempo de Carnificina',
      ano: 2021,
      estilo: 'Ação/Ficção científica',
      direcao: 'Andy Serkis',
      image: 'https://universoheroico.com.br/wp-content/uploads/2021/05/Poster-de-Venom-Tempo-de-Carnificina.jpeg',
      descricao: 'O relacionamento entre Eddie e Venom está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, esse dois lados descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados.',
    },
    {
      key: '4',
      filme: 'Viúva Negra',
      ano: 2021,
      estilo: 'Ação/Aventura',
      direcao: 'Cate Shortland',
      image: 'https://br.web.img2.acsta.net/pictures/20/03/09/15/51/4538015.jpg',
      descricao: 'Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.',
    },
    {
      key: '5',
      filme: 'The Batman',
      ano: 2022,
      estilo: 'Ação/Aventura',
      direcao: 'Matt Reeves',
      image: 'https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg',
      descricao: 'Da Warner Bros. Pictures chega THE BATMAN com o realizador Matt Reeves no comando e protagonizado por Robert Pattinson no duplo papel de detetive de Gotham City e do seu alter ego, o bilionário solitário Bruce Wayne.',
    },
    {
      key: '6',
      filme: 'Matrix Resurrections',
      ano: 2021,
      estilo: 'Ficção científica/Ação',
      direcao: 'Lana Wachowski',
      image: 'https://blogger.googleusercontent.com/img/a/AVvXsEig67ohHUD6gtM88XHDIkTX_WxVpClN6AhVdegh9XRSLAAoc5caccbz4RAGPFaMzSQxuV9B6sBV3NsFldX5qauExPfhCdd-hJQICxFZRgOIU8wHDDj-w8RwOZKFt_kKlxxeyVO9ztMNVOfcoOXaiYJ2YMuPdCqaNnXdxo8rKSTbUYehlT8h5Ao4dxiYLA=s940',
      descricao: 'Da visionária realizadora Lana Wachowski chega-nos MATRIX RESURRECTIONS o tão aguardado 4º filme do inovador franchise que redefiniu o género. O novo filme reúne os protagonistas originais Keanu Reeves e Carrie-Anne Moss nos icónicos personagens que os tornaram famosos, Neo e Trinity.',
    },
  ];

  return (
    <View >
      <FlatList data={data} renderItem={({ item }) => <FlatComponent data={item} />} />
    </View >
  )
}


