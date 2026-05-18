export interface Scene {
  title: string
  text: string
  imageUrl?: string
}

export interface Story {
  slug: string
  title: string
  subtitle: string
  description: string
  readingTime: string
  ageRange: string
  emoji: string
  gradient: string
  bgColor: string
  accentColor: string
  bibleReference: string
  moralLesson: string
  scenes: Scene[]
  imageUrl?: string
  testament: "velho" | "novo"
}

export const stories: Story[] = [
  {
    imageUrl: "/images/historias/criacao-do-mundo.svg",
    slug: "criacao-do-mundo",
    title: "A Criação do Mundo",
    subtitle: "Como tudo começou",
    description:
      "No princípio, Deus criou o céu e a terra em seis dias maravilhosos. Descubra como a luz, o mar, as plantas, os animais e as pessoas foram feitos com muito amor!",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "🌍",
    gradient: "from-blue-400 via-teal-400 to-green-400",
    bgColor: "bg-blue-50",
    accentColor: "text-teal-700",
    bibleReference: "Gênesis 1–2",
    testament: "velho",
    moralLesson:
      "Deus fez um mundo lindo cheio de amor. Tudo o que Ele criou é bom — inclusive você!",
    scenes: [
      {
        title: "Antes de Tudo...",
        imageUrl: "/images/historias/criacao-do-mundo-cena-1.svg",
        text: `Era uma vez... antes de qualquer coisa existir.

Não havia sol, não havia estrelas, não havia árvores nem animais. Não havia nada além de escuridão e silêncio.

Mas Deus estava lá. E Deus tinha um plano muito especial.

— Vou criar um lugar lindo! — disse Deus com alegria.

E assim começou a maior aventura de todos os tempos: a criação do nosso maravilhoso mundo!`,
      },
      {
        title: "O Primeiro Dia: Vamos ter Luz!",
        imageUrl: "/images/historias/criacao-do-mundo-cena-2.svg",
        text: `Deus olhou para a escuridão e disse com voz firme e cheia de amor:

— Que haja luz!

E de repente... FLASH! Uma luz brilhante encheu tudo! Era quente, era dourada, era linda!

Deus viu que a luz era boa e sorriu.

— Isso sim é lindo! — disse Ele.

Deus chamou a luz de "dia" e a escuridão de "noite". E aquele foi o primeiro dia.`,
      },
      {
        title: "O Mar e a Terra",
        imageUrl: "/images/historias/criacao-do-mundo-cena-3.svg",
        text: `Nos dias seguintes, Deus continuou trabalhando com muito carinho.

Ele separou as águas e criou um céu azul lá em cima, cheio de nuvens brancas e fofas que pareciam algodão.

Depois Deus juntou as águas e fez os mares profundos e azuis. E onde não havia água, surgiu a terra firme com montanhas, vales e planícies.

— Agora vamos enfeitar! — disse Deus animado.

E da terra nasceram grama verdinha, flores de todas as cores, árvores altas com frutas gostosas e flores perfumadas que dançavam no vento.

O mundo estava ficando cada vez mais bonito!`,
      },
      {
        title: "O Sol, a Lua e as Estrelinhas",
        imageUrl: "/images/historias/criacao-do-mundo-cena-4.svg",
        text: `Deus colocou o sol brilhante no céu para iluminar os dias e esquentar tudo com carinho. Criou também a lua prateada e milhares de estrelinhas que piscavam à noite, como luzinhas de festa no céu.

Então Deus encheu os mares de peixes coloridos, golfinhos saltitantes e baleias enormes que cantavam felizes.

No céu apareceram pássaros de todas as cores voando livre e alegres, chirpiando músicas bonitas.

E na terra? Leões, elefantes, girafas, borboletas, cachorros, gatos e tantos outros animais surgiram, todos correndo, pulando e brincando!

Deus olhou para tudo isso e disse:

— Que lindo! Está ficando perfeito!`,
      },
      {
        title: "A Criatura Mais Especial",
        imageUrl: "/images/historias/criacao-do-mundo-cena-5.svg",
        text: `No sexto dia, Deus fez algo muito especial. Ele pegou um pouco de terra com as mãos e fez uma pessoa — o primeiro homem, chamado Adão.

Deus soprou com cuidado e o homem ganhou vida! Adão abriu os olhos e viu o mundo maravilhoso ao redor.

— Uau! — disse Adão encantado, olhando para as flores, os animais e o céu azul.

Depois Deus criou Eva, a primeira mulher, para ser companheira de Adão. Os dois ficaram muito felizes no jardim mais bonito do mundo, o Jardim do Éden.

Deus deu para eles um trabalho muito gostoso: cuidar do jardim e de todos os animais.

No sétimo dia, Deus descansou, muito satisfeito com tudo que havia criado.

E o mais importante de tudo? Você também faz parte dessa criação linda. Deus te fez com muito amor!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/noe-e-a-grande-arca.svg",
    slug: "noe-e-a-grande-arca",
    title: "Noé e a Grande Arca",
    subtitle: "A história do homem, os animais e o arco-íris",
    description:
      "Noé era um homem muito bom e obediente. Quando Deus pediu para ele construir um barco gigante, ele obedeceu — e salvou sua família e todos os animais!",
    readingTime: "9 min",
    ageRange: "3–8 anos",
    emoji: "🚢",
    gradient: "from-indigo-400 via-blue-400 to-cyan-400",
    bgColor: "bg-indigo-50",
    accentColor: "text-indigo-700",
    bibleReference: "Gênesis 6–9",
    testament: "velho",
    moralLesson:
      "Quando obedecemos a Deus e confiamos Nele, mesmo as situações mais difíceis têm um final lindo — como um arco-íris!",
    scenes: [
      {
        title: "Noé, o Homem Bom",
        imageUrl: "/images/historias/noe-e-a-grande-arca-cena-1.svg",
        text: `Há muitos e muitos anos, havia um homem chamado Noé. Ele tinha cabelos brancos e uma barba grande e cheia.

Noé era diferente de todos ao redor. Enquanto as outras pessoas só pensavam em coisas ruins, Noé amava a Deus de todo o coração. Ele era bondoso, honesto e cuidava bem da sua família.

Noé tinha três filhos: Sem, Cam e Jafé, e cada um tinha a sua esposa.

Todos os dias, Noé conversava com Deus, e isso deixava seu coração quentinho e tranquilo.`,
      },
      {
        title: "Deus Tem um Grande Plano",
        imageUrl: "/images/historias/noe-e-a-grande-arca-cena-2.svg",
        text: `Um dia, Deus falou com Noé:

— Noé, meu amigo, preciso te contar algo importante. Vou mandar uma grande chuva que vai cobrir toda a terra. Mas você e sua família estão protegidos, porque você me obedece.

Noé escutou com atenção.

— Quero que você construa uma arca — uma grande embarcação de madeira. E quando ela estiver pronta, coloque dentro a sua família e um casal de cada animal que existe!

Noé ficou olhando para o céu azul sem nenhuma nuvem. Construir um barco enorme? Com todos os animais? Parecia impossível!

Mas Noé confiou em Deus e disse:

— Tudo bem, Senhor. Farei tudo como você mandou!`,
      },
      {
        title: "Construindo a Arca",
        imageUrl: "/images/historias/noe-e-a-grande-arca-cena-3.svg",
        text: `E assim começou o maior projeto de construção que o mundo já viu!

Noé e seus filhos trabalharam dia após dia, martelando, serrando e pregando as tábuas de madeira. A arca era ENORME — mais longa do que um campo de futebol!

Os vizinhos passavam e riam:

— Hahaha! Olha o Noé fazendo um barco no meio do campo! Que tolice!

Mas Noé não ligava. Ele continuava trabalhando, cantando e sorrindo.

— Não me importo com as gozações. Eu confio em Deus! — dizia ele.

Depois de muito tempo de trabalho, a arca ficou pronta. Era linda, resistente e cheirava a madeira fresca!`,
      },
      {
        title: "Os Animais Chegando",
        imageUrl: "/images/historias/noe-e-a-grande-arca-cena-4.svg",
        text: `Então aconteceu algo incrível!

Os animais começaram a chegar de todos os lados — dois a dois, um machinho e uma feminha de cada espécie.

Girafa e girafa, elefante e elefante, leão e leoa, urso e ursa, coelho e coelha, borboleta e borboleta...

Eram tantos animais que parecia um desfile! Noé e seus filhos olhavam boquiabertos para aquela fila interminável.

Os animais entraram na arca calmamente, como se soubessem exatamente o que fazer. Era como se Deus estivesse guiando cada um deles.

Depois de todos entrarem, Deus fechou a porta da arca com um barulho suave.

E então começou a chover...`,
      },
      {
        title: "O Arco-Íris da Promessa",
        imageUrl: "/images/historias/noe-e-a-grande-arca-cena-5.svg",
        text: `A chuva caiu por quarenta dias e quarenta noites, sem parar. As águas subiram, subiram e cobriram tudo.

Mas dentro da arca, Noé, sua família e todos os animais estavam seguros e quentinhos. Às vezes o navio balançava, mas Deus cuidava de todos.

Por fim, a chuva parou. As águas foram baixando pouquinho a pouquinho...

A arca encostou em uma montanha. Noé soltou um pombo que voltou carregando um galho de oliveira no bico — sinal de que havia terra seca!

Quando saíram da arca, o sol brilhava forte e o cheiro de terra molhada era gostoso.

Então Deus disse:

— Olha para o céu, Noé!

E lá estava: um arco-íris imenso e colorido — vermelho, laranja, amarelo, verde, azul e violeta — cruzando o céu de ponta a ponta.

— Este arco-íris é minha promessa para você e para todos os seus filhos — disse Deus com carinho. — Nunca mais vou cobrir toda a terra com água. Toda vez que vocês virem o arco-íris, lembrem-se de que eu os amo!

E Noé e sua família abraçaram uns aos outros, cheios de alegria e gratidão.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/jose-e-o-casaco-colorido.svg",
    slug: "jose-e-o-casaco-colorido",
    title: "José e o Casaco Colorido",
    subtitle: "A história do sonhador que nunca desistiu",
    description:
      "José era o filho favorito de seu pai Jacó, que lhe deu um casaco de muitas cores. Mas a inveja dos irmãos mudou tudo — até Deus transformar a tristeza em alegria!",
    readingTime: "10 min",
    ageRange: "4–8 anos",
    emoji: "🌈",
    gradient: "from-orange-400 via-yellow-400 to-amber-400",
    bgColor: "bg-orange-50",
    accentColor: "text-orange-700",
    bibleReference: "Gênesis 37–45",
    testament: "velho",
    moralLesson:
      "Mesmo quando as coisas parecem muito tristes, Deus tem um plano lindo. Nunca desista!",
    scenes: [
      {
        title: "A Família de Jacó",
        imageUrl: "/images/historias/jose-e-o-casaco-colorido-cena-1.svg",
        text: `Havia uma vez um homem chamado Jacó que tinha doze filhos. Era uma família grande e barulhenta, cheia de histórias e aventuras!

O filho favorito de Jacó era o jovem José, um rapaz de cabelos escuros e olhos brilhantes que adorava sonhar.

José tinha um talento muito especial: ele conseguia entender o que os sonhos significavam!

Às vezes, à noite, enquanto dormia, Deus lhe mostrava imagens e mensagens em seus sonhos.

Os irmãos mais velhos observavam José e sentiam algo amargo no coração. Uma coisa chamada inveja...`,
      },
      {
        title: "O Presente Especial",
        imageUrl: "/images/historias/jose-e-o-casaco-colorido-cena-2.svg",
        text: `Um dia, Jacó chamou José e disse com um sorriso enorme:

— Tenho um presente para você, meu filho!

E tirou de dentro de um baú um casaco lindo, feito com tecidos de todas as cores: vermelho vibrante, azul royal, amarelo ouro, verde esmeralda e roxo real.

Era o casaco mais bonito que José já tinha visto!

— Obrigado, papai! — disse José, abraçando o pai com força.

Mas quando os irmãos viram o casaco, seus rostos ficaram vermelhos de inveja.

— Por que José ganha presente especial e nós não? — resmungaram entre si.

E a inveja foi crescendo nos corações deles, como erva daninha...`,
      },
      {
        title: "Os Sonhos de José",
        imageUrl: "/images/historias/jose-e-o-casaco-colorido-cena-3.svg",
        text: `José correu para contar um sonho aos irmãos:

— Sonhei que estávamos amarrando feixes de trigo no campo. O meu feixe ficou em pé, e os feixes de vocês se curvaram para o meu!

Os irmãos ficaram furiosos:

— Você acha que vai ser rei sobre nós?!

Noutra noite, José sonhou de novo e contou:

— Sonhei que o sol, a lua e onze estrelas se curvavam para mim!

Até o pai Jacó achou estranho:

— Que sonho é esse? Sua mãe, seu pai e seus irmãos vão se curvar a você?

Os irmãos cada vez mais com raiva...`,
      },
      {
        title: "A Triste Separação",
        imageUrl: "/images/historias/jose-e-o-casaco-colorido-cena-4.svg",
        text: `Um dia, os irmãos estavam cuidando das ovelhas longe de casa. Jacó mandou José levá-los comida.

Quando os irmãos viram José se aproximando com seu casaco colorido, combinaram:

— Vamos se livrar desse sonhador!

Com crueldade, eles arrancaram o casaco de José, jogaram-no numa cisterna vazia e o venderam para mercadores que iam para o Egito.

José chorou muito. Ele não entendia por que seus próprios irmãos fariam isso.

Os irmãos pegaram o casaco, colocaram sangue de cabra nele e voltaram para casa com o coração pesado.

— Um animal selvagem matou José! — mentiram para o pai.

Jacó ficou arrasado. E José estava longe, longe...`,
      },
      {
        title: "O Plano de Deus",
        imageUrl: "/images/historias/jose-e-o-casaco-colorido-cena-5.svg",
        text: `No Egito, José enfrentou dias muito difíceis. Mas mesmo nos momentos mais tristes, Deus estava com ele.

Por causa do seu dom de interpretar sonhos, José conseguiu explicar um sonho do Faraó — o rei do Egito — e foi nomeado o segundo homem mais poderoso do país!

Anos depois, uma grande seca chegou. A fome chegou a todo o mundo... inclusive à família de Jacó.

Os irmãos de José precisaram viajar ao Egito para buscar comida. Quando chegaram, ficaram cara a cara com o poderoso governador...

Era José! Vivo, bem cuidado e sorrindo.

Os irmãos estavam com medo, mas José correu para abraçá-los com lágrimas nos olhos:

— Não tenham medo! O que vocês queriam para o mal, Deus transformou em bem. Fui trazido aqui para salvar muitas vidas — inclusive a nossa família!

E assim, José, Jacó e todos os irmãos se reuniram novamente — com choro, abraços e muita alegria.

O sonhador que nunca desistiu viu o plano de Deus se cumprir de um jeito que nunca imaginou!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/o-bebe-moises.svg",
    slug: "o-bebe-moises",
    title: "O Bebê Moisés",
    subtitle: "A criancinha da cestinha",
    description:
      "Quando Moisés nasceu, sua mãe teve uma ideia muito especial para protegê-lo: colocá-lo em uma cestinha no rio Nilo. Descubra como Deus cuidou desse bebê especial!",
    readingTime: "7 min",
    ageRange: "3–7 anos",
    emoji: "👶",
    gradient: "from-green-400 via-emerald-400 to-teal-500",
    bgColor: "bg-green-50",
    accentColor: "text-emerald-700",
    bibleReference: "Êxodo 2:1–10",
    testament: "velho",
    moralLesson:
      "Deus cuida de cada criança com amor. Você é muito especial para Ele!",
    scenes: [
      {
        title: "O Povo de Deus no Egito",
        imageUrl: "/images/historias/o-bebe-moises-cena-1.svg",
        text: `Há muito tempo, o povo de Deus — os hebreus — vivia no Egito. Eles haviam chegado como convidados, mas com o passar dos anos o Faraó, o rei do Egito, se tornou cruel.

— Os hebreus estão crescendo demais! — disse o Faraó, batendo o punho na mesa.

E ele fez algo muito injusto: ordenou que os hebreus trabalhassem como escravos, carregando pedras pesadas sob o sol quente.

Mas mesmo assim, o povo rezava e confiava que Deus não os havia esquecido.`,
      },
      {
        title: "A Mãe Corajosa",
        imageUrl: "/images/historias/o-bebe-moises-cena-2.svg",
        text: `Numa família hebreia, nasceu um bebê. Mas que bebê! Tinha olhos grandes e brilhantes, bochechas redondas e um sorriso que derretia o coração de qualquer pessoa.

A mãe olhava para o filho e sentia seu coração apertar. O Faraó havia dado uma ordem terrível: que todos os bebês hebreus fossem jogados no rio.

— Não vou deixar nada de ruim acontecer com você! — sussurrou ela, abraçando o bebê com força.

Por três meses, ela escondeu o bebê em casa. Quando ele chorava, ela o embalava cantando baixinho para ninguém ouvir.

Mas logo ele cresceria e ficaria difícil de esconder...`,
      },
      {
        title: "A Cestinha Mágica",
        imageUrl: "/images/historias/o-bebe-moises-cena-3.svg",
        text: `A mãe pensou e pensou. E teve uma ideia iluminada por Deus!

Ela pegou juncos — plantas que crescem na beira do rio — e trançou com todo cuidado uma cestinha resistente. Depois colocou alcatrão por fora para que a água não entrasse.

Forrouinha por dentro com tecido macio e colocou o bebê lá dentro, docinho e quentinho.

Com o coração cheio de fé, ela foi ao rio Nilo e colocou a cestinha entre as plantas da margem.

— Cuide dele, Senhor — rezou ela em voz baixa, com lágrimas escorrendo pelo rosto.

Miriam, a irmã mais velha do bebê, ficou escondida entre as plantas observando de longe, pronta para ver o que aconteceria.`,
      },
      {
        title: "A Princesa Encontra o Bebê",
        imageUrl: "/images/historias/o-bebe-moises-cena-4.svg",
        text: `Naquele mesmo dia, a filha do Faraó veio ao rio para se banhar com suas criadas.

De repente, ela viu algo se mexer entre as plantas.

— O que é aquilo? — perguntou curiosa, apontando para a cestinha.

Uma criada foi buscar. Quando abriram, o bebê olhou para a princesa com seus olhões... e começou a chorar.

— Ah! É um bebê Hebreuzinho! — disse a princesa, pegando ele no colo com ternura.

O coraçãozinho dela se derreteu de amor!

— Coitadinho... vou cuidar de você! Será meu filho! — disse ela com carinho.

Miriam, que estava observando tudo, correu até a princesa:

— Posso chamar uma mulher hebreia para amamentar o bebê para você?

— Sim, vá! — disse a princesa sorrindo.

Miriam foi correndo chamar... a própria mãe do bebê!`,
      },
      {
        title: "A Surpresa de Deus",
        imageUrl: "/images/historias/o-bebe-moises-cena-5.svg",
        text: `A mãe voltou com Miriam e ficou de frente para a princesa, com o coração quase saltando do peito.

— Cuide desse bebê para mim — disse a princesa — e eu pagarei por isso.

A mãe pegou o filho nos braços, e uma lágrima de alegria escorregou pelo seu rosto. Ela iria cuidar do próprio filho, com a proteção do palácio!

Deus tinha feito algo incrível: transformou o plano mais triste no mais lindo desfecho!

O bebê cresceu feliz e seguro. Quando ficou maior, a princesa o chamou para viver no palácio e deu a ele um nome:

— Seu nome será Moisés — que significa "tirado das águas".

E Moisés cresceu forte, sabendo que havia algo muito especial reservado para ele...`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/davi-e-golias.svg",
    slug: "davi-e-golias",
    title: "Davi e Golias",
    subtitle: "O menino corajoso que derrotou o gigante",
    description:
      "Todo mundo tinha medo do gigante Golias. Menos um pastorzinho chamado Davi, que sabia que com Deus ao lado, nada é impossível!",
    readingTime: "9 min",
    ageRange: "4–8 anos",
    emoji: "⚔️",
    gradient: "from-rose-400 via-red-400 to-orange-500",
    bgColor: "bg-rose-50",
    accentColor: "text-rose-700",
    bibleReference: "1 Samuel 17",
    testament: "velho",
    moralLesson:
      "Não importa o tamanho do problema — com Deus ao seu lado, você pode vencer qualquer gigante!",
    scenes: [
      {
        title: "O Gigante Aterrorizante",
        imageUrl: "/images/historias/davi-e-golias-cena-1.svg",
        text: `Os filisteus, inimigos do povo de Israel, tinham um guerreiro muito especial — e muito assustador.

Seu nome era Golias, e ele era... enorme!

Era tão alto que sua cabeça ficava no nível da janela do segundo andar. Sua armadura pesava mais do que três crianças juntas. E sua voz? Quando ele gritava, as árvores tremiam!

Todos os dias, Golias saía para o vale e gritava para o exército de Israel:

— HEY! Mandem alguém para lutar comigo! Se ele ganhar, viramos escravos de vocês. Se EU ganhar, vocês serão nossos escravos! Hahaha!

Os soldados de Israel olhavam uns para os outros, com joelhos bambos e faces pálidas. Ninguém queria enfrentar aquele monstro.`,
      },
      {
        title: "O Pastorzinho Davi",
        imageUrl: "/images/historias/davi-e-golias-cena-2.svg",
        text: `Num vilarejo próximo, havia um menino chamado Davi. Ele era jovem, de cabelos ruivos e rosto cheio de sardas, com um sorriso largo e olhos corajosos.

O trabalho de Davi era cuidar das ovelhas do seu pai. Todos os dias ele levava o rebanho para pastar, tocava sua harpa e cantava para Deus.

Mas Davi não era qualquer pastorzinho! Uma vez, quando um leão e depois um urso tentaram roubar uma ovelha, Davi foi corajoso:

— Deus me ajudou a enfrentar o leão e o urso. Ele também me ajuda em tudo!

Um dia, seu pai disse:

— Davi, leve comida para seus irmãos que estão no acampamento do exército.

E Davi foi, cantando pelo caminho.`,
      },
      {
        title: "Davi no Acampamento",
        imageUrl: "/images/historias/davi-e-golias-cena-3.svg",
        text: `Quando Davi chegou ao acampamento, ouviu aquela voz trovejante:

— HEY! Onde está o guerreiro de Israel?! Covardes! Hahahaha!

Davi olhou e viu o gigante Golias do outro lado do vale, com sua armadura brilhante e lança enorme.

Os soldados fugiam com medo.

Mas Davi franziu a testa e disse:

— Quem é esse filisteu que ousa desafiar o exército do Deus vivo?!

Os soldados olharam para ele espantados.

O rei Saul ouviu falar do jovem pastorzinho e mandou chamá-lo.

— Posso lutar contra esse gigante! — disse Davi ao rei.

— Você? Você é apenas um menino! — respondeu o rei Saul.

— Eu cuido das ovelhas do meu pai. Quando um leão ou urso tentou atacar, eu lutei e venci! — disse Davi com calma. — Deus me livrou de todos eles. Ele me livrará também de Golias.

O rei Saul olhou para o menino por um longo tempo...

— Vá. E que Deus esteja com você!`,
      },
      {
        title: "Cinco Pedrinhas no Rio",
        imageUrl: "/images/historias/davi-e-golias-cena-4.svg",
        text: `Saul quis colocar sua armadura em Davi — capacete de bronze, colete de malha, espada.

Mas Davi deu alguns passos e quase caiu.

— Não consigo me mexer com tudo isso! — disse ele, tirando a armadura pesada. — Não estou acostumado.

E Davi foi ao riacho. Abaixou, procurou com cuidado e escolheu cinco pedrinhas lisas e redondas.

As colocou na sua bolsa de pastor, pegou sua funda de couro — uma espécie de estilingue — e foi em direção ao gigante.

Do outro lado, Golias olhou e começou a gargalhar:

— Que é isso?! Mandam um menino com um pauzinho para me enfrentar? Hahahaha! Vou te transformar em almoço dos pássaros!

Mas Davi respondeu sem tremor na voz:

— Você vem com espada, lança e escudo. Mas eu venho em nome do SENHOR, o Deus de Israel! A batalha é do Senhor!`,
      },
      {
        title: "A Vitória Inesperada",
        imageUrl: "/images/historias/davi-e-golias-cena-5.svg",
        text: `Golias avançou pesado e barulhento.

Davi correu em direção ao gigante!

Com mãos firmes, enfiou a mão na bolsa, pegou uma pedra. Girou a funda no ar — uma, duas, três vezes — e soltou!

A pedra voou certeira e atingiu Golias bem no meio da testa.

PLOM!

O gigante cambaleou... e caiu no chão como uma árvore derrubada. Um barulho enorme ecoou pelo vale.

Silêncio total.

Depois... o exército de Israel soltou um grito enorme de alegria!

Os filisteus viram seu campeão caído e fugiram correndo.

Todos vieram ver Davi, o menino pastor que havia vencido o gigante com fé e uma pedra pequena.

E Davi levantou os olhos para o céu e agradeceu:

— Obrigado, Senhor! Com você, tudo é possível!

E assim o mundo aprendeu uma lição para sempre: não é o tamanho do guerreiro que importa — é o tamanho da fé!`,
      },
    ],
  },

  // ── Novo Testamento ──────────────────────────────────────────────────────
  {
    imageUrl: "/images/historias/o-nascimento-de-jesus.svg",
    slug: "o-nascimento-de-jesus",
    title: "O Nascimento de Jesus",
    subtitle: "A noite mais especial do mundo",
    description:
      "Numa noitinha estrelada em Belém, nasceu o bebê mais especial de todos os tempos. Os pastores, os anjos e os Reis Magos vieram de longe para conhecê-lo!",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "⭐",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    bgColor: "bg-indigo-50",
    accentColor: "text-indigo-700",
    bibleReference: "Lucas 2:1–20",
    testament: "novo",
    moralLesson:
      "Jesus veio ao mundo porque Deus nos ama imensamente. Cada Natal é uma festa de amor!",
    scenes: [
      {
        title: "A Longa Viagem",
        imageUrl: "/images/historias/o-nascimento-de-jesus-cena-1.svg",
        text: `Havia muito tempo, numa cidadezinha chamada Nazaré, vivia uma moça muito especial chamada Maria. Ela tinha cabelos escuros, um sorriso gentil e um coração cheio de amor por Deus.

Maria estava esperando um bebê muito, muito especial. Um anjo chamado Gabriel tinha visitado ela e dito:

— Maria, você vai ter um filho! E ele será o Filho de Deus. Chame-o de Jesus!

Maria ficou surpresa, mas aceitou com alegria:

— Que seja como Deus quiser!

Seu noivo, José, era um carpinteiro bondoso de mãos calejadas e coração generoso. Quando soube da notícia, também ficou feliz e prometeu cuidar de Maria e do bebê.

Mas antes de o bebê nascer, chegou uma notícia: o rei queria contar todas as pessoas do país. Todo mundo precisava viajar para a cidade de sua família.

Para José, isso significava ir a Belém — uma viagem longa e cansativa!`,
      },
      {
        title: "Sem Lugar na Estalagem",
        imageUrl: "/images/historias/o-nascimento-de-jesus-cena-2.svg",
        text: `José e Maria partiram para Belém. Maria ia montada num burrico paciente enquanto José andava ao lado, cuidando de cada passo.

A viagem era longa e as estradas eram de terra. O sol queimava durante o dia e o frio chegava à noite.

Quando finalmente chegaram em Belém, a cidade estava cheia de gente! Haviam pessoas por toda parte — nas ruas, nas praças, nas casas.

José bateu na porta de uma estalagem:

— Por favor, você tem um quarto? Minha esposa está para ter bebê!

— Sinto muito, está tudo lotado — respondeu o dono.

José tentou outra estalagem. E mais outra. E mais uma...

— Não tem lugar, não.
— Já estamos cheios!
— Não posso ajudar.

Mas um estalajadeiro de coração bom disse:

— Não tenho quarto, mas tenho um estábulo aqui atrás. Está limpo e tem palha fresca. Vocês podem ficar lá.

José e Maria agradeceram com o coração cheio de gratidão.`,
      },
      {
        title: "O Bebê Jesus Nasce",
        imageUrl: "/images/historias/o-nascimento-de-jesus-cena-3.svg",
        text: `Naquela noite, no estábulo quentinho, cercada pelo cheiro de palha e pelo hálito morno dos animais, Maria teve seu bebê.

Era lindo! Um menino perfeito com olhinhos que pareciam carregar toda a luz do céu.

Maria embrulhou o bebê Jesus com carinho em pedaços de pano e o colocou numa manjedoura — a caixinha de comida dos animais — que virou o bercinho mais especial do mundo.

O burrinho, o boi e as ovelhas ficaram quietinhos, como se soubessem que algo muito sagrado estava acontecendo.

Lá fora, o céu estava cheio de estrelas brilhantes. Uma delas, maior e mais linda que todas, brilhava bem em cima do estábulo.

Era o nascimento mais importante de toda a história!`,
      },
      {
        title: "Os Pastores e os Anjos",
        imageUrl: "/images/historias/o-nascimento-de-jesus-cena-4.svg",
        text: `Nos campos perto de Belém, alguns pastores cuidavam de suas ovelhas durante a noite. Eles olhavam para o céu escuro e conversavam baixinho.

De repente... WHOOOOSH! Uma luz enorme e dourada iluminou tudo! Os pastores pularam de susto.

Era um anjo brilhante! Os pastores ficaram com tanto medo que caíram no chão.

— Não tenham medo! — disse o anjo com voz tranquila e alegre. — Tenho uma boa notícia, a melhor notícia de todas! Hoje nasceu em Belém o Salvador do mundo — Jesus, o Filho de Deus! Você vão achá-lo num estábulo, embrulhado em pano e deitado numa manjedoura.

E então o céu inteiro se encheu de anjos cantando:

— Glória a Deus! E paz na terra para todas as pessoas!

Quando os anjos foram embora, os pastores se olharam com olhos brilhando:

— Vamos lá! Vamos ver esse bebê!

E saíram correndo em direção a Belém!`,
      },
      {
        title: "Os Reis Magos e a Estrela",
        imageUrl: "/images/historias/o-nascimento-de-jesus-cena-5.svg",
        text: `Bem longe dali, no Oriente, sábios estudiosos das estrelas observaram o céu e viram algo nunca antes visto: uma estrela nova e enorme, mais brilhante que todas.

— Essa estrela significa que nasceu um rei muito especial! — disseram eles.

E partiram numa longa jornada, seguindo a estrela, levando presentes preciosos: ouro, incenso e mirra.

Depois de muito tempo viajando por desertos e montanhas, a estrela parou bem em cima do lugar onde estava o menino Jesus.

Os Reis Magos entraram, viram o bebê Jesus no colo de Maria e sentiram seus corações se encherem de alegria. Ajoelharam-se e ofereceram seus presentes preciosos.

Aquela noite em Belém foi a noite mais especial da história do mundo inteiro.

O Filho de Deus tinha chegado — não num palácio com coroa de ouro, mas num estábulo simples, com coração cheio de amor por cada pessoa deste mundo.

Inclusive por você!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/jesus-e-os-pescadores.svg",
    slug: "jesus-e-os-pescadores",
    title: "Jesus e os Pescadores",
    subtitle: "Quando Jesus chamou seus amigos",
    description:
      "Pedro e André passaram a noite toda pescando e não pegaram nada. Até que encontraram Jesus na margem do lago e tudo mudou de um jeito incrível!",
    readingTime: "7 min",
    ageRange: "3–8 anos",
    emoji: "🐟",
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    bgColor: "bg-cyan-50",
    accentColor: "text-cyan-700",
    bibleReference: "Lucas 5:1–11",
    testament: "novo",
    moralLesson:
      "Quando Jesus entra na nossa vida, tudo muda para melhor. Ele nos chama para ser seus amigos e ajudar as pessoas!",
    scenes: [
      {
        title: "Uma Noite Sem Peixe",
        imageUrl: "/images/historias/jesus-e-os-pescadores-cena-1.svg",
        text: `O lago da Galileia era lindo — azul e brilhante, rodeado de colinas verdes.

Naquele lago, havia dois irmãos pescadores chamados Simão Pedro e André. Todo dia eles saíam no barco de madeira com suas redes e trabalhavam muito para pescar.

Mas naquela noite... nada.

Eles jogaram a rede de um lado. Nada.
Jogaram do outro lado. Nada.
Esperaram em silêncio. Nada.

Quando o sol começou a nascer, Pedro e André voltaram para a margem cansados e com os ombros caídos. Suas redes estavam vazias.

— Que noite horrível — murmurou Pedro, começando a lavar as redes.

Seu parceiro Tiago e seu irmão João estavam consertando as redes no barco ao lado, também com cara de pouco caso.`,
      },
      {
        title: "O Homem na Margem",
        imageUrl: "/images/historias/jesus-e-os-pescadores-cena-2.svg",
        text: `De repente, uma multidão de pessoas veio chegando pela beira do lago — queriam ouvir um homem que estava ensinando.

Era Jesus! Ele tinha olhos bondosos e uma voz que deixava as pessoas com o coração quentinho.

A multidão foi crescendo e Jesus precisava de espaço. Ele olhou para Pedro e pediu:

— Simão, posso entrar no seu barco? Você empurra um pouquinho para longe da margem?

Pedro concordou, curioso com aquele homem.

Jesus entrou no barco, sentou, e de lá dentro começou a ensinar a multidão na margem. Pedro ficou escutando enquanto segurava o barco. E as palavras de Jesus eram tão bonitas, tão cheias de amor e sabedoria, que Pedro ficou de boca aberta.

Quando Jesus terminou de falar, virou para Pedro e disse com um sorriso:

— Agora leva o barco para águas mais fundas e joguem as redes para pescar.`,
      },
      {
        title: "A Rede Cheia",
        imageUrl: "/images/historias/jesus-e-os-pescadores-cena-3.svg",
        text: `Pedro coçou a cabeça. Tinha pescado a noite inteira sem pegar nada. E agora de dia, quando os peixes ficam escondidos?

Mas havia algo naquele homem que fazia Pedro querer obedecer. Com um suspiro, ele disse:

— Mestre, trabalhamos a noite toda e não pegamos nada. Mas já que você está pedindo... vou jogar a rede!

Jogaram.

E então... a rede ficou PESADA! Tão pesada que Pedro mal conseguia puxar!

Os peixes entraram em quantidade enorme — a rede começou a rasgar de tanto peixe!

— TIAGO! JOÃO! VEM CÁ! — gritou Pedro desesperado.

O outro barco veio correndo. Os dois barcos ficaram tão cheios de peixes que quase afundavam!

Pedro olhou para Jesus com os olhos arregalados. Seu coração estava acelerado. Aquilo não era possível...`,
      },
      {
        title: "Venham me Seguir!",
        imageUrl: "/images/historias/jesus-e-os-pescadores-cena-4.svg",
        text: `Pedro caiu de joelhos no barco, entre os peixes saltitantes, e disse com a voz trêmula:

— Senhor, eu não sou digno de estar perto de você. Sou um homem cheio de defeitos!

Jesus olhou para ele com um sorriso cheio de carinho e disse:

— Não tenha medo, Pedro! A partir de agora, em vez de pescar peixes, você vai ajudar pessoas a encontrar Deus!

Pedro ficou olhando para Jesus. Depois olhou para o lago. Depois para os peixes.

E tomou uma decisão que mudou sua vida para sempre.

Ele deixou o barco, as redes e todos aqueles peixes na margem...

E foi seguir Jesus.

André, Tiago e João fizeram a mesma coisa! Os quatro amigos partiram juntos, cheios de alegria e curiosidade, sem saber ao certo o que viria pela frente — mas sabendo que ao lado de Jesus, seria incrível.`,
      },
      {
        title: "Amigos de Jesus",
        imageUrl: "/images/historias/jesus-e-os-pescadores-cena-5.svg",
        text: `Ao longo do tempo, Jesus foi chamando mais pessoas para caminhar com Ele. No total, doze amigos especiais — chamados de discípulos — foram seus companheiros de jornada.

Eles andaram juntos pelas cidades e vilarejos. Viram Jesus curar pessoas doentes, ajudar os que estavam tristes e ensinar coisas maravilhosas sobre o amor de Deus.

Pedro, aquele pescador que não tinha conseguido um peixe sequer naquela noite, se tornou um dos amigos mais próximos de Jesus.

E sabe o que é mais lindo nessa história?

Jesus ainda hoje chama as pessoas para serem suas amigas. Ele olha para você — assim como olhou para Pedro na margem do lago — e convida:

— Quer ser meu amigo?

E quando você diz sim para Jesus, sua vida também fica cheia, cheia, cheia... assim como aquela rede de peixe!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/jesus-acalma-a-tempestade.svg",
    slug: "jesus-acalma-a-tempestade",
    title: "Jesus Acalma a Tempestade",
    subtitle: "Quando Jesus mandou o vento parar",
    description:
      "Os discípulos estavam com muito medo dentro do barco sacudido pelas ondas enormes. Mas Jesus estava com eles — e com uma só palavra, tudo ficou em paz.",
    readingTime: "7 min",
    ageRange: "3–8 anos",
    emoji: "🌊",
    gradient: "from-slate-500 via-blue-600 to-cyan-500",
    bgColor: "bg-slate-50",
    accentColor: "text-blue-700",
    bibleReference: "Marcos 4:35–41",
    testament: "novo",
    moralLesson:
      "Quando você tiver medo, lembre que Jesus está sempre com você. Ele é mais forte do que qualquer tempestade!",
    scenes: [
      {
        title: "Um Dia Cheio",
        imageUrl: "/images/historias/jesus-acalma-a-tempestade-cena-1.svg",
        text: `Jesus tinha passado o dia inteiro ensinando multidões de pessoas à beira do lago da Galileia.

Ele contou histórias lindas — sobre sementes que crescem, sobre um pai que ama seus filhos, sobre o reino de Deus.

As pessoas ouviam com os olhos brilhando e o coração esperançoso.

Mas quando o sol começou a se pôr, Jesus estava cansado. Cansado de um jeito muito humano — com os pés doendo e os olhos pesados.

Ele olhou para seus discípulos e disse com uma voz tranquila:

— Vamos para o outro lado do lago.

Os discípulos toparam. Afinal, muitos deles eram pescadores e conheciam bem aquelas águas. Subiram no barco, Jesus foi com eles, e partiram enquanto o céu ficava laranja e roxo.`,
      },
      {
        title: "Jesus Dormindo",
        imageUrl: "/images/historias/jesus-acalma-a-tempestade-cena-2.svg",
        text: `Jesus foi para a parte de trás do barco, pegou um travesseiro e... dormiu.

Sim! O Filho de Deus estava tão cansado que dormiu profundamente enquanto o barco navegava.

Os discípulos remavam e conversavam baixinho para não acordá-lo.

Tudo estava bem. O lago estava calmo, o céu estava estrelado.

Mas então, sem aviso nenhum, tudo mudou.

Uma nuvem escura e pesada cobriu as estrelas. O vento começou a soprar — primeiro devagarzinho, depois cada vez mais forte.

As ondas ficaram grandes. Depois enormes.

O barco começou a balançar — para um lado, para o outro, para cima, para baixo!

A água entrava por cima das bordas!`,
      },
      {
        title: "O Medo dos Discípulos",
        imageUrl: "/images/historias/jesus-acalma-a-tempestade-cena-3.svg",
        text: `Os discípulos pescadores conheciam bem o lago. Eles sabiam quando uma tempestade era perigosa.

E aquela era MUITO perigosa.

Eles remavam com toda a força, tentavam tirar a água do barco, gritavam uns para os outros no meio do vento uivante.

— A onda! CUIDADO COM A ONDA!

— O barco vai afundar!

— Estamos perdidos!

E Jesus? Ainda dormindo lá atrás, balançando junto com o barco, sem se preocupar com nada.

Os discípulos olharam uns para os outros. Olharam para Jesus.

Pedro foi até ele e sacudiu:

— MESTRE! MESTRE! Acorda! A gente vai morrer afogado! Você não liga para isso?!`,
      },
      {
        title: "Paz, Aquieta-te!",
        imageUrl: "/images/historias/jesus-acalma-a-tempestade-cena-4.svg",
        text: `Jesus abriu os olhos. Olhou para os discípulos apavorados. Olhou para as ondas furiosas. Olhou para o vento sacudindo tudo.

Levantou-se devagar.

E com uma voz calma — mas cheia de autoridade — falou para o vento e para as ondas:

— Paz! Aquieta-te!

E o vento parou.

Assim. De repente. Completamente.

As ondas foram ficando menores... menores... menores... até que o lago ficou liso como um espelho.

Silêncio total. Só o barulho do barco boiando na água quieta.

Os discípulos ficaram olhando para o lago, para Jesus, para o lago de novo.

Estavam com a boca aberta. As mãos tremiam — mas não de medo. De espanto.

— Que homem é esse? — sussurravam uns para os outros. — Até o vento e o mar obedecem a ele!`,
      },
      {
        title: "Não Tenham Medo",
        imageUrl: "/images/historias/jesus-acalma-a-tempestade-cena-5.svg",
        text: `Jesus olhou para cada um dos seus amigos com carinho.

— Por que vocês ficaram com tanto medo? — perguntou com gentileza. — Ainda não confiam em mim?

Os discípulos abaixaram a cabeça. Era verdade: eles tinham esquecido que Jesus estava com eles.

E quando Jesus está com você, não há tempestade grande o suficiente para destruir você.

Eles chegaram do outro lado do lago em paz, o coração ainda acelerado mas cheio de fé.

E aquela história ficou guardada para sempre na memória deles — a noite em que viram Jesus mandar a tempestade parar com uma palavra.

E você, sabe de uma coisa?

Quando você estiver com medo — de trovão, de escuro, de qualquer coisa — pode lembrar dessa história e dizer: "Jesus está comigo." Porque está mesmo. Sempre.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/jesus-alimenta-cinco-mil.svg",
    slug: "jesus-alimenta-cinco-mil",
    title: "Jesus Alimenta 5.000 Pessoas",
    subtitle: "O almoço de um menino que alimentou uma multidão",
    description:
      "Era hora do jantar e havia 5.000 pessoas com fome no campo. Um menininho tinha só 5 pãezinhos e 2 peixinhos. Mas nas mãos de Jesus, aquilo se tornou um banquete!",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "🍞",
    gradient: "from-yellow-400 via-amber-400 to-orange-500",
    bgColor: "bg-yellow-50",
    accentColor: "text-amber-700",
    bibleReference: "João 6:1–14",
    testament: "novo",
    moralLesson:
      "Quando damos o que temos para Jesus, mesmo que pareça pouco, Ele pode fazer algo incrível com isso!",
    scenes: [
      {
        title: "Uma Multidão no Campo",
        imageUrl: "/images/historias/jesus-alimenta-cinco-mil-cena-1.svg",
        text: `A notícia sobre Jesus se espalhava por todas as cidades e vilarejos: ele curava pessoas doentes, ajudava os tristes e ensinava coisas maravilhosas.

E por isso as pessoas iam até onde ele estivesse.

Naquele dia, Jesus e seus discípulos foram para um campo tranquilo perto do lago. Queriam descansar um pouco.

Mas quando chegaram... a multidão já estava lá esperando!

Famílias inteiras tinham caminhado horas para ver Jesus. Havia velhinhos e bebês de colo, crianças correndo e jovens curiosos. Eram tantas pessoas que parecia uma cidadezinha inteira reunida no campo aberto.

Jesus olhou para aquela gente e sentiu seu coração se encher de amor. Ele não mandou ninguém embora.

Pelo contrário — ficou o dia todo ensinando, conversando e curando quem precisava.`,
      },
      {
        title: "Hora do Jantar",
        imageUrl: "/images/historias/jesus-alimenta-cinco-mil-cena-2.svg",
        text: `O sol começou a descer no horizonte, pintando o céu de laranja e rosa.

Filipe, um dos discípulos, olhou para a multidão e depois para Jesus:

— Mestre... já está ficando tarde. Essas pessoas estão com fome! Acho que devemos mandá-las para as aldeias comprarem comida.

Jesus olhou para Filipe com um brilho nos olhos e perguntou:

— E onde vamos comprar pão para alimentar toda essa gente?

Filipe fez as contas rapidamente:

— Duzentos denários de pão não seriam suficientes para cada um pegar um pedacinho sequer!

André, outro discípulo, veio correndo:

— Mestre! Encontrei um menino aqui que tem comida. Mas é bem pouco...`,
      },
      {
        title: "O Menino Corajoso",
        imageUrl: "/images/historias/jesus-alimenta-cinco-mil-cena-3.svg",
        text: `O menino se aproximou de Jesus. Era um garoto simples, com cabelos bagunçados e sandálias empoeiradas de tanto caminhar.

Na cesta que ele carregava havia o almoço que sua mãe tinha preparado:

Cinco pãezinhos de cevada — pequenos, redondos e cheirosos.
Dois peixinhos — salgados e secos.

Era a comida de um menino. Para cinco mil pessoas, não daria nem para um lanche.

Os discípulos olhavam para a cesta e faziam careta:

— Isso não vai adiantar nada...

Mas o menino olhou para Jesus e, com um sorriso, estendeu a cesta:

— Pode pegar! É tudo o que eu tenho, mas você pode usar.

Jesus pegou a cesta e sorriu para o menino com um olhar que dizia: obrigado. Você não sabe o que acabou de fazer.`,
      },
      {
        title: "O Milagre",
        imageUrl: "/images/historias/jesus-alimenta-cinco-mil-cena-4.svg",
        text: `Jesus pediu para todo mundo se sentar na grama. Cinco mil pessoas se acomodaram em grupos, como um piquenique gigante.

Então Jesus pegou os cinco pães, olhou para o céu e agradeceu a Deus.

Depois começou a partir os pães.

E distribuiu para os discípulos. Os discípulos levaram para as pessoas.

E Jesus partiu mais. E distribuiu mais.

E mais. E mais. E mais.

Os pães não acabavam!

Os peixinhos não acabavam!

As pessoas comiam, se serviam de novo e ainda sobravam!

Crianças rindo, adultos boquiabertos, discípulos correndo de um lado para o outro carregando pão. Era uma festa!

Quando todo mundo tinha comido até ficar satisfeito, Jesus pediu:

— Recolham o que sobrou, para nada ser desperdiçado.

Os discípulos foram com cestas... e encheram DOZE cestas com os pedaços que sobraram!

De cinco pãezinhos e dois peixinhos!`,
      },
      {
        title: "O Presente do Menino",
        imageUrl: "/images/historias/jesus-alimenta-cinco-mil-cena-5.svg",
        text: `Enquanto os discípulos recolhiam as sobras, o menino ficou olhando com os olhos arregalados.

Ele tinha dado tudo que tinha. Uma coisa pequenininha.

E Jesus tinha alimentado cinco mil pessoas com aquilo.

O menino nunca mais esqueceu aquele dia.

E essa história chegou até nós, milhares de anos depois, para nos lembrar de algo muito importante:

Você não precisa ter muito para fazer a diferença. Um sorriso, uma palavra de carinho, um biscoitinho dividido com o amigo — nas mãos de Jesus, qualquer coisa vira algo grande.

Quando você oferece o que tem com amor, coisas incríveis podem acontecer!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/a-ressurreicao-de-jesus.svg",
    slug: "a-ressurreicao-de-jesus",
    title: "A Ressurreição de Jesus",
    subtitle: "O maior milagre de todos os tempos",
    description:
      "Os amigos de Jesus estavam muito tristes. Mas na manhã do terceiro dia, algo incrível aconteceu — algo que mudou o mundo para sempre e nos enche de esperança!",
    readingTime: "9 min",
    ageRange: "4–8 anos",
    emoji: "✨",
    gradient: "from-violet-400 via-purple-500 to-pink-400",
    bgColor: "bg-violet-50",
    accentColor: "text-violet-700",
    bibleReference: "Lucas 24:1–12; João 20",
    testament: "novo",
    moralLesson:
      "Jesus venceu até a morte! Por isso podemos viver sem medo, cheios de alegria e esperança — porque Ele está vivo!",
    scenes: [
      {
        title: "A Sexta-Feira Triste",
        imageUrl: "/images/historias/a-ressurreicao-de-jesus-cena-1.svg",
        text: `Esta história começa com tristeza. Uma tristeza muito grande.

Jesus, o melhor amigo que as pessoas já tiveram, tinha sido preso por pessoas que não gostavam dele. Mesmo sem ter feito nada de errado, Jesus foi colocado numa cruz.

Seus amigos — Maria Madalena, os discípulos, sua mãe Maria — ficaram olhando de longe, com o coração partido.

Por que isso estava acontecendo com Jesus, que só fazia o bem?

Mas Jesus, mesmo na dor, olhou para o céu e disse:

— Pai, perdoa eles. Eles não sabem o que estão fazendo.

Até no momento mais difícil, Jesus pensava em perdoar e amar.

Quando Jesus morreu, seus amigos ficaram arrasados. Colocaram seu corpo com muito carinho num túmulo — uma caverna na rocha — e rolaram uma pedra enorme na entrada.

Aquela noite foi a mais triste da vida deles.`,
      },
      {
        title: "A Manhã do Terceiro Dia",
        imageUrl: "/images/historias/a-ressurreicao-de-jesus-cena-2.svg",
        text: `Um, dois, três dias se passaram.

Bem cedinho, quando o céu ainda estava cinza e o sol mal tinha nascido, Maria Madalena e algumas outras mulheres foram até o túmulo.

Elas carregavam perfumes e flores. Queriam cuidar do corpo de Jesus com carinho — era um jeito de demonstrar amor, mesmo depois da morte.

O caminho era silencioso. Os pássaros mal tinham começado a cantar.

Enquanto caminhavam, uma preocupação:

— E a pedra enorme na entrada do túmulo? Quem vai tirar ela pra gente?

Mas quando chegaram mais perto e olharam...

A pedra estava rolada para o lado!

O túmulo estava aberto!

As mulheres olharam umas para as outras com o coração na garganta. O que tinha acontecido?`,
      },
      {
        title: "O Túmulo Vazio",
        imageUrl: "/images/historias/a-ressurreicao-de-jesus-cena-3.svg",
        text: `Maria Madalena correu até a abertura e olhou para dentro.

O túmulo estava vazio.

As tiras de pano em que Jesus tinha sido enrolado estavam ali, dobradas com cuidado, mas Jesus não estava.

Dois homens com roupas que brilhavam como relâmpago estavam dentro do túmulo. Eram anjos!

As mulheres caíram com o rosto no chão, com o coração acelerado.

— Por que vocês procuram entre os mortos aquele que está vivo? — perguntaram os anjos com vozes cheias de alegria. — Ele não está aqui! Ele ressuscitou!

Ressuscitou! Voltou à vida!

As mulheres levantaram a cabeça. Olharam para o túmulo vazio. Olharam para os anjos. Olharam umas para as outras.

E então saíram correndo!`,
      },
      {
        title: "Jesus Aparece para Maria",
        imageUrl: "/images/historias/a-ressurreicao-de-jesus-cena-4.svg",
        text: `Maria Madalena ficou perto do túmulo, chorando.

Ela ainda não entendia direito o que tinha acontecido. O coração dela doía de saudade.

De repente, alguém estava perto dela. Ela pensou que era o jardineiro.

— Por que você está chorando? Quem você procura? — perguntou ele.

— Senhor, se você sabe onde está Jesus, me diga onde colocaram ele... — respondeu Maria com a voz trêmula.

E então a pessoa disse apenas uma palavra:

— Maria.

Só o jeito que ele falou o nome dela... ela reconheceu imediatamente!

Maria virou e viu Jesus — vivo, de pé, sorrindo para ela!

— Mestre! — ela exclamou, correndo para ele.

Era real. Ele estava vivo de verdade!

— Vai e conta para os meus amigos — disse Jesus. — Diga que eu estou vivo!`,
      },
      {
        title: "A Alegria que Nunca Acaba",
        imageUrl: "/images/historias/a-ressurreicao-de-jesus-cena-5.svg",
        text: `Maria Madalena saiu correndo o mais rápido que suas pernas podiam!

Chegou ofegante onde estavam os discípulos, com as bochechas vermelhas e os olhos brilhando:

— Eu vi Jesus! Ele está vivo! ELE RESSUSCITOU!

Os discípulos ficaram olhando para ela. Alguns não acreditaram de primeira. Como podia?

Mas logo Jesus apareceu para eles também — passando por portas fechadas, mostrando as marcas das mãos, comendo peixe com eles, conversando e ensinando.

Era realmente Ele. Vivo. Para sempre.

E essa notícia — que Jesus ressuscitou — se espalhou pelo mundo inteiro.

Até hoje, quando chega a Páscoa, as pessoas celebram essa alegria:

Jesus estava morto... e voltou à vida!

Isso significa que o amor de Deus é mais forte do que qualquer coisa. Mais forte do que a tristeza, mais forte do que o medo, mais forte do que a própria morte.

E Jesus vive até hoje. No seu coração, quando você fala com Ele, Ele ouve. Porque está vivo!`,
      },
    ],
  },
  // ── Velho Testamento (continuação) ──────────────────────────────────────
  {
    imageUrl: "/images/historias/abraao-e-isaque.svg",
    slug: "abraao-e-isaque",
    title: "Abraão e Isaque",
    subtitle: "A história da fé que não hesitou",
    description:
      "Abraão era um homem que confiava em Deus de todo o coração. Quando Deus fez uma promessa impossível — e depois pediu algo muito difícil — Abraão obedeceu com fé!",
    readingTime: "8 min",
    ageRange: "4–8 anos",
    emoji: "⭐",
    gradient: "from-yellow-500 via-amber-400 to-orange-400",
    bgColor: "bg-yellow-50",
    accentColor: "text-amber-700",
    bibleReference: "Gênesis 12–22",
    testament: "velho",
    moralLesson:
      "Quando confiamos em Deus com todo o coração — mesmo quando é difícil — Ele cuida de nós e cumpre cada promessa!",
    scenes: [
      {
        title: "A Grande Promessa",
        imageUrl: "/images/historias/abraao-e-isaque-cena-1.svg",
        text: `Há muitos, muitos anos, havia um homem chamado Abraão. Ele tinha uma barba longa, cabelos brancos e um coração que amava muito a Deus.

Abraão vivia com sua esposa Sara numa terra distante. Mas um dia, Deus falou com ele:

— Abraão, quero que você deixe tudo e vá para uma terra nova que vou te mostrar. Eu farei de você o pai de uma grande família — tão grande quanto as estrelas do céu!

Abraão olhou para o céu estrelado. Estrelas, estrelas e mais estrelas — impossível contar!

— Mas Senhor... eu e Sara já somos velhos. Não temos filhos.

— Confie em mim — respondeu Deus com gentileza.

E Abraão, sem hesitar, fez as malas e partiu. Porque quando Deus faz uma promessa, Ele cumpre!`,
      },
      {
        title: "O Bebê da Promessa",
        imageUrl: "/images/historias/abraao-e-isaque-cena-2.svg",
        text: `Os anos foram passando. Abraão e Sara ficaram ainda mais velhos. E a promessa... ainda não havia chegado.

Mas Deus não esquece.

Um dia, três visitantes chegaram à tenda de Abraão. Eram anjos enviados por Deus!

— Daqui a um ano, Sara terá um filho — disseram eles.

Sara, que estava escutando atrás da tenda, não conseguiu conter o riso:

— Hahaha! Eu, ter um filho? Com a minha idade?

Mas os mensageiros disseram com firmeza:

— Há algo impossível para Deus?

E um ano depois, exatamente como prometido, nasceu um bebê lindo e saudável.

Abraão e Sara olharam para o filhinho nos braços e riram de alegria.

— Vamos chamá-lo de Isaque! — disse Sara. — Porque Isaque significa "riso"!

E a promessa de Deus finalmente tinha nome.`,
      },
      {
        title: "A Difícil Missão",
        imageUrl: "/images/historias/abraao-e-isaque-cena-3.svg",
        text: `Isaque cresceu forte e saudável. Abraão amava seu filho mais do que qualquer coisa no mundo.

Mas um dia, Deus chamou Abraão:

— Abraão!

— Estou aqui, Senhor — respondeu ele prontamente.

— Quero que você leve seu filho Isaque ao monte que vou te mostrar. Você vai precisar mostrar que confia em mim mais do que em qualquer coisa.

O coração de Abraão parou por um segundo.

Era o pedido mais difícil de toda a sua vida.

Abraão ficou muito tempo quieto, olhando para o filho dormindo.

Mas então, de madrugada, ele acordou Isaque, preparou o burro e saiu em silêncio.

No caminho, Isaque perguntou:

— Pai, temos lenha e fogo... mas onde está o animal para o sacrifício?

Abraão respirou fundo e respondeu:

— Meu filho, Deus mesmo vai providenciar.`,
      },
      {
        title: "A Mão de Deus",
        imageUrl: "/images/historias/abraao-e-isaque-cena-4.svg",
        text: `Chegaram ao topo do monte. Abraão construiu um altar com pedras, colocou a lenha, amarrou Isaque com cuidado e o colocou em cima.

Suas mãos tremiam.

Seu coração disparou.

Mas ele confiava. Confiava completamente em Deus.

Quando estava prestes a agir, de repente ouviu:

— ABRAÃO! ABRAÃO!

— Estou aqui! — respondeu ele imediatamente.

— Não faça nada ao menino! — disse o anjo com urgência. — Agora sei que você confia em Deus de verdade, porque não reteve nem mesmo seu filho amado!

Abraão olhou ao redor e viu um carneiro preso pelos chifres num arbusto.

Deus havia providenciado, exatamente como Abraão havia dito!

Ele desatou Isaque rapidamente, e os dois se abraçaram com lágrimas nos olhos.`,
      },
      {
        title: "A Fé Que Vence",
        imageUrl: "/images/historias/abraao-e-isaque-cena-5.svg",
        text: `O anjo de Deus falou de novo a Abraão com voz cheia de amor:

— Por causa da sua obediência, vou abençoá-lo muito! Sua família será grande como as estrelas do céu e como a areia do mar. E por meio de seus descendentes, todas as famílias da Terra serão abençoadas!

Abraão e Isaque desceram o monte juntos, de mãos dadas, o coração cheio de paz.

No caminho de volta, Isaque olhou para o pai:

— Pai, como você sabia que Deus ia providenciar?

Abraão sorriu e colocou a mão no ombro do filho:

— Porque aprendi que Deus nunca faz uma promessa que não cumpre. Quando confiamos nEle de verdade, mesmo nos momentos mais difíceis, Ele está lá.

E aquela família simples — um pai de cabelos brancos e um filho curioso — tornou-se a raiz de uma história que Deus estava escrevendo para o mundo inteiro.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/josue-e-jerico.svg",
    slug: "josue-e-jerico",
    title: "Josué e Jericó",
    subtitle: "Quando as muralhas caíram",
    description:
      "Jericó tinha muros enormes e parecia impossível de conquistar. Mas Deus tinha um plano surpreendente — e Josué obedeceu, mesmo achando estranho. O resultado? Incrível!",
    readingTime: "8 min",
    ageRange: "4–8 anos",
    emoji: "🏰",
    gradient: "from-red-500 via-orange-400 to-amber-400",
    bgColor: "bg-red-50",
    accentColor: "text-red-700",
    bibleReference: "Josué 6",
    testament: "velho",
    moralLesson:
      "Quando seguimos o plano de Deus — mesmo quando parece estranho — coisas impossíveis acontecem!",
    scenes: [
      {
        title: "O Novo Líder",
        imageUrl: "/images/historias/josue-e-jerico-cena-1.svg",
        text: `Depois que Moisés foi para o céu, Deus escolheu um novo líder para o povo de Israel: Josué.

Josué era corajoso, forte e obedecia a Deus em tudo. Mas agora ele tinha uma tarefa enorme pela frente.

O povo de Israel chegou às margens do Rio Jordão. Do outro lado estava a Terra Prometida — a terra que Deus havia reservado para eles há tantos anos.

Mas havia um problema.

Logo na entrada ficava a cidade de Jericó. Uma cidade com muros altíssimos e grossos como paredes de castelo. Os portões estavam fechados com trancas pesadas de ferro.

Ninguém entrava. Ninguém saía.

Os soldados de Jericó olhavam de cima das muralhas com rostos sérios.

Josué olhou para aqueles muros enormes e então olhou para o céu:

— Senhor, o que fazemos?`,
      },
      {
        title: "O Plano Mais Estranho do Mundo",
        imageUrl: "/images/historias/josue-e-jerico-cena-2.svg",
        text: `E Deus respondeu com um plano. Um plano muito, muito diferente de qualquer coisa que Josué já havia imaginado.

— Por seis dias, você vai marchar com todo o exército ao redor da cidade, uma vez por dia. Os sacerdotes vão carregar a Arca da Aliança e soprar as trombetas.

Josué escutou com atenção.

— No sétimo dia, vocês vão marchar ao redor da cidade sete vezes. Depois, os sacerdotes vão dar um longo toque de trombeta — e todo o povo vai gritar bem alto!

Josué piscou.

Marchar em círculos? Gritar? Sem espadas, sem catapultas, sem escadas?

Os soldados também ouviram e se entreolharam sem entender.

Mas Josué não hesitou nem por um segundo.

— Certo, Senhor. Faremos exatamente assim.

E foi explicar o plano para todo o povo.`,
      },
      {
        title: "Os Seis Dias de Marcha",
        imageUrl: "/images/historias/josue-e-jerico-cena-3.svg",
        text: `No primeiro dia, o povo de Israel marchou ao redor de Jericó em silêncio. Só o som das sandálias na terra e o bum-bum das trombetas dos sacerdotes.

Os habitantes de Jericó olhavam de cima dos muros, confusos.

— O que eles estão fazendo? — perguntavam uns para os outros.

No segundo dia, a mesma coisa. No terceiro, no quarto, no quinto, no sexto.

Os moradores de Jericó começaram a rir:

— Que exército esquisito! Eles só andam em círculos! Hahaha!

Mas Josué estava tranquilo.

Quando alguém ia reclamar — "Por que ficamos só marchando?" — Josué respondia com calma:

— Porque Deus sabe o que está fazendo. Nosso trabalho é confiar e obedecer.

E o povo continuou marchando, dia após dia.`,
      },
      {
        title: "O Sétimo Dia",
        imageUrl: "/images/historias/josue-e-jerico-cena-4.svg",
        text: `No sétimo dia, algo diferente aconteceu.

O povo acordou bem cedo — antes mesmo do sol nascer completamente.

E começaram a marchar.

Uma volta. Duas. Três. Quatro. Cinco. Seis.

Na sétima volta, Josué gritou para todo o povo:

— AGORA! Gritem! Porque Deus entregou a cidade nas mãos de vocês!

As trombetas soaram longas e poderosas.

E então, aquele povo que havia caminhado em silêncio por seis dias inteiros, soltou o mais alto grito que você já pode imaginar:

— AAAAAHHHHH!!!

O chão tremeu.

Os pássaros voaram assustados.

E então...`,
      },
      {
        title: "As Muralhas Que Caíram",
        imageUrl: "/images/historias/josue-e-jerico-cena-5.svg",
        text: `CRAAAC! BOOM! RUUUMBLE!

As muralhas enormes de Jericó começaram a rachar, a balançar... e desabaram!

Pedras gigantes rolaram para todos os lados levantando uma nuvem enorme de poeira.

Os soldados de Jericó caíram junto com os muros, sem entender o que havia acontecido.

O povo de Israel cruzou aquelas ruínas com alegria e tomou a cidade — exatamente como Deus havia prometido.

Josué levantou os olhos para o céu e agradeceu:

— Senhor, você é incrível! Um plano que parecia impossível — e funcionou perfeitamente!

E aquele dia ficou guardado na memória do povo para sempre:

As muralhas de Jericó não caíram por causa de espadas ou catapultas.

Caíram porque um povo escolheu confiar em Deus e obedecer — mesmo sem entender como.

E isso, meu amigo, é o que a fé faz!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/daniel-na-cova-dos-leoes.svg",
    slug: "daniel-na-cova-dos-leoes",
    title: "Daniel e os Leões",
    subtitle: "A coragem de quem não abre mão de Deus",
    description:
      "Daniel era um homem que orava três vezes por dia — não importava o que acontecesse. Quando os inimigos tentaram prendê-lo por causa disso, ele enfrentou a cova dos leões com fé!",
    readingTime: "8 min",
    ageRange: "4–8 anos",
    emoji: "🦁",
    gradient: "from-violet-500 via-purple-400 to-indigo-400",
    bgColor: "bg-violet-50",
    accentColor: "text-violet-700",
    bibleReference: "Daniel 6",
    testament: "velho",
    moralLesson:
      "Quando não abrimos mão de Deus — mesmo com medo — Ele nos protege de formas que ninguém consegue explicar!",
    scenes: [
      {
        title: "O Homem Das Orações",
        imageUrl: "/images/historias/daniel-na-cova-dos-leoes-cena-1.svg",
        text: `Em Babilônia, uma cidade enorme e cheia de palácios dourados, havia um homem chamado Daniel.

Daniel não era babilônio. Ele tinha vindo de Israel quando ainda era jovem, levado como prisioneiro. Mas mesmo longe de casa, Daniel nunca esqueceu quem ele era — nem quem era o seu Deus.

Todos os dias, três vezes por dia, Daniel subia até o quarto de cima da sua casa, abria a janela que ficava de frente para Jerusalém e orava.

De manhã. Ao meio-dia. À noite.

Sempre.

O rei Dario gostava muito de Daniel. Era um homem honesto, trabalhador e sábio. O rei queria fazer de Daniel o mais importante líder do reino.

Isso deixou muitos outros ministros com inveja.

— Precisamos acabar com Daniel... — sussurraram entre si.`,
      },
      {
        title: "A Armadilha",
        imageUrl: "/images/historias/daniel-na-cova-dos-leoes-cena-2.svg",
        text: `Os inimigos de Daniel procuravam um jeito de derrubá-lo. Mas Daniel era tão honesto que não achavam nada errado nele.

— Só vamos conseguir pegá-lo por causa do seu Deus — concluíram.

Então foram falar com o rei Dario com um sorriso falso:

— Ó rei, que você viva para sempre! Todos os sábios do reino concordam que você deve assinar uma lei: durante 30 dias, ninguém pode pedir nada a nenhum deus ou homem, só ao rei. Quem desobedecer vai para a cova dos leões!

O rei Dario gostou da ideia e assinou a lei.

Quando Daniel soube da lei, foi para casa como sempre.

Abriu a janela.

Ajoelhou.

E orou, como fazia todos os dias.

Seus inimigos estavam espiando pela janela e foram correndo ao rei:

— Daniel está desobedecendo a sua lei!`,
      },
      {
        title: "A Noite Mais Longa",
        imageUrl: "/images/historias/daniel-na-cova-dos-leoes-cena-3.svg",
        text: `O rei Dario ficou muito triste. Ele gostava de Daniel e tentou durante horas encontrar uma saída.

Mas a lei estava assinada. Não podia ser mudada.

Com o coração pesado, o rei mandou prender Daniel.

Os guardas jogaram Daniel na cova dos leões — um buraco fundo e escuro onde rugidos ecoavam pelas paredes de pedra.

Uma pedra enorme foi colocada na entrada.

O rei Dario voltou para o palácio, mas não conseguiu comer nem dormir.

Passou a noite inteira andando de um lado para o outro.

— Daniel, que o seu Deus te salve... — murmurou ele no escuro.

Lá embaixo, na cova, Daniel estava rodeado de leões com olhos brilhantes no escuro.

Mas Daniel não gritou.

Não correu.

Ficou quieto e confiou.`,
      },
      {
        title: "A Manhã da Surpresa",
        imageUrl: "/images/historias/daniel-na-cova-dos-leoes-cena-4.svg",
        text: `Quando o sol nasceu, o rei Dario correu para a cova dos leões o mais rápido que conseguia.

Com voz trêmula, gritou:

— Daniel! Servo do Deus vivo! Seu Deus, a quem você serve sempre, conseguiu te salvar dos leões?!

Silêncio.

O coração do rei parou.

E então veio a resposta:

— Ó rei, que você viva para sempre! Meu Deus enviou o seu anjo e fechou a boca dos leões!

O rei Dario não acreditava nos próprios ouvidos!

— Tirem Daniel da cova! — gritou ele com alegria.

Quando Daniel saiu, todos olharam seu corpo com cuidado.

Nem um arranhão.

Nem uma marca.

Os leões não haviam tocado nele.`,
      },
      {
        title: "O Deus Que Salva",
        imageUrl: "/images/historias/daniel-na-cova-dos-leoes-cena-5.svg",
        text: `O rei Dario ficou tão impressionado que escreveu uma carta para todo o reino:

"Que todo povo, nação e língua trema diante do Deus de Daniel! Porque Ele é o Deus vivo, que permanece para sempre. Seu reino nunca será destruído. Ele salva e livra, e faz sinais e maravilhas no céu e na terra — pois livrou Daniel das garras dos leões!"

Daniel continuou trabalhando no reino com honestidade e fé.

E até hoje, quando alguém está com medo e não sabe o que fazer, pode lembrar de Daniel:

Um homem que não abriu mão de Deus — nem quando a lei proibiu, nem quando os leões rugiam.

E Deus fechou a boca dos leões.

Porque nenhum rugido é maior do que o amor de Deus por você.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/jonas-e-a-baleia.svg",
    slug: "jonas-e-a-baleia",
    title: "Jonas e a Baleia",
    subtitle: "Nunca é tarde para obedecer a Deus",
    description:
      "Jonas recebeu uma missão de Deus, mas fugiu para o lado contrário. O que aconteceu foi incrível — e Jonas aprendeu que não tem como escapar do amor de Deus!",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "🐋",
    gradient: "from-cyan-500 via-blue-400 to-teal-400",
    bgColor: "bg-cyan-50",
    accentColor: "text-cyan-700",
    bibleReference: "Jonas 1–3",
    testament: "velho",
    moralLesson:
      "Quando desobedecemos a Deus as coisas ficam complicadas — mas Ele sempre nos dá uma segunda chance!",
    scenes: [
      {
        title: "A Missão que Jonas Não Queria",
        imageUrl: "/images/historias/jonas-e-a-baleia-cena-1.svg",
        text: `Jonas era um profeta — uma pessoa escolhida por Deus para levar mensagens importantes.

Um dia, Deus falou com Jonas:

— Jonas, vá para a cidade de Nínive e avise o povo de lá que eles precisam mudar o jeito de viver!

Jonas fechou os olhos.

Nínive era uma cidade enorme, cheia de pessoas que faziam coisas erradas. E Jonas... não queria ir.

— Não! De jeito nenhum! — pensou ele.

E Jonas fez exatamente o contrário do que Deus pediu.

Foi correndo até o porto, comprou uma passagem no navio e embarcou numa direção completamente oposta!

— Vou para Társis — disse ele para si mesmo. — Longe de Nínive, longe dessa missão, longe de tudo.

Mas Jonas não sabia que é impossível fugir de Deus.`,
      },
      {
        title: "A Tempestade",
        imageUrl: "/images/historias/jonas-e-a-baleia-cena-2.svg",
        text: `O navio havia navegado por um tempo quando o céu começou a escurecer.

Devagar a princípio. Depois, rápido demais.

O vento uivou. As ondas cresceram. O navio balançava tanto que parecia brinquedo.

Os marinheiros gritavam, jogavam coisas no mar para o navio ficar mais leve, e rezavam para seus deuses.

Nada adiantava.

Lá embaixo, no porão do navio, Jonas estava dormindo.

O capitão foi até ele e sacudiu:

— Como você consegue dormir?! Ore para o seu Deus — talvez Ele nos salve!

Os marinheiros fizeram um sorteio para descobrir quem era o culpado da tempestade.

O sorteio apontou para Jonas.

Com a cabeça baixa, Jonas confessou tudo:

— É verdade. Estou fugindo de Deus. Se vocês me jogarem no mar, a tempestade vai parar.

Os marinheiros não queriam fazer isso. Mas a tempestade foi ficando pior.

E no fim, jogaram Jonas no mar.`,
      },
      {
        title: "Dentro da Baleia",
        imageUrl: "/images/historias/jonas-e-a-baleia-cena-3.svg",
        text: `SPLASH!

Jonas afundou nas águas escuras e frias.

As ondas o envolveram por todos os lados.

E então...

Uma boca enorme se abriu nas profundezas.

E Jonas foi engolido por um peixe gigante — uma baleia!

GULP.

Escuro total.

Jonas ficou três dias e três noites na barriga da baleia.

Tinha algas, peixes pequenos e um cheiro muito ruim.

Ali, no lugar mais estranho que já existiu, Jonas finalmente fez o que deveria ter feito desde o início.

Orou.

— Senhor, eu errei. Fugi de você, mas você me encontrou aqui. Me salve, e eu prometo: vou obedecer à sua missão!

E Deus ouviu.

Do fundo do oceano, Deus ouviu a oração de Jonas.`,
      },
      {
        title: "Cuspido na Praia",
        imageUrl: "/images/historias/jonas-e-a-baleia-cena-4.svg",
        text: `Deus falou com a baleia.

E a baleia nadou até a praia, abriu a boca e... PTCHUU!

Cuspiu Jonas na areia seca.

Jonas caiu de quatro na praia, cuspindo água salgada e algas.

Respirou fundo.

Olhou ao redor.

A areia estava morna, o sol brilhava, os pássaros cantavam.

Estava vivo.

E então Deus disse de novo, com a mesma voz calma de antes:

— Jonas, vá para Nínive.

Dessa vez, Jonas não hesitou.

Levantou, sacudiu a areia, e foi direto para Nínive.

Quando chegou, andou pelas ruas da cidade enorme e gritou a mensagem de Deus.

As pessoas ouviram.

E o que aconteceu foi a coisa mais inesperada de toda a história.`,
      },
      {
        title: "A Segunda Chance",
        imageUrl: "/images/historias/jonas-e-a-baleia-cena-5.svg",
        text: `As pessoas de Nínive ouviram a mensagem de Jonas e ficaram com o coração partido.

O rei saiu do trono, tirou a coroa da cabeça e disse:

— Todo o nosso povo vai pedir perdão a Deus. Vamos mudar o jeito de viver!

E assim fizeram.

Todo o povo de Nínive se arrependeu — do maior ao menor.

E Deus, cheio de amor, os perdoou.

Jonas ficou um pouquinho bravo — ele queria que Nínive fosse castigada. Mas Deus disse a ele com carinho:

— Jonas, essas pessoas não sabiam o que estava errado. Devo me importar com elas — não é mesmo?

E Jonas entendeu.

Deus é assim: Ele não desiste de ninguém.

Nem das pessoas de Nínive.

Nem dos profetas teimosos que fogem em navio.

Nem de você.

Sempre tem uma segunda chance.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/sansao.svg",
    slug: "sansao",
    title: "Sansão, o Homem Forte",
    subtitle: "A força que vem de Deus",
    description:
      "Sansão era o homem mais forte do mundo — mas sua força tinha um segredo especial. Descubra como Deus pode usar pessoas corajosas para proteger seu povo!",
    readingTime: "8 min",
    ageRange: "4–8 anos",
    emoji: "💪",
    gradient: "from-yellow-400 via-orange-400 to-red-400",
    bgColor: "bg-yellow-50",
    accentColor: "text-yellow-700",
    bibleReference: "Juízes 13–16",
    testament: "velho",
    moralLesson:
      "A verdadeira força não vem dos nossos músculos — vem de Deus. E quando erramos, Deus ainda nos dá chance de recomeçar!",
    scenes: [
      {
        title: "O Bebê da Promessa",
        imageUrl: "/images/historias/sansao-cena-1.svg",
        text: `Há muito tempo, um casal sem filhos estava muito triste.

Manoa e sua esposa queriam tanto um filho, mas os anos iam passando e ele não vinha.

E então um dia, um anjo apareceu para a esposa de Manoa com uma mensagem especial:

— Você vai ter um filho! Mas ele será especial — consagrado a Deus desde antes de nascer.

O anjo explicou que esse menino deveria ter os cabelos compridos para sempre, como sinal de que pertencia a Deus. E que quando crescesse, ele ajudaria a proteger o povo de Israel.

A mulher correu para contar ao marido com o coração acelerado.

Quando o menino nasceu, cheio de saúde, os pais choraram de alegria.

Chamaram-no de Sansão.

E desde pequenininho, os cabelos de Sansão nunca foram cortados.`,
      },
      {
        title: "A Força Extraordinária",
        imageUrl: "/images/historias/sansao-cena-2.svg",
        text: `Sansão cresceu forte. Muito forte.

Mais forte do que qualquer homem que se conhecia.

Mas aquela força não era sua — era de Deus. E vinha junto com algo especial que acontecia quando o Espírito de Deus chegava nele.

Certa vez, um leão feroz saltou em cima de Sansão no meio do caminho.

Com as próprias mãos, Sansão segurou o leão e o venceu — como se fosse um filhotinho de cabrito.

Outra vez, os inimigos de Israel — os filisteus — cercaram Sansão com um grande exército.

Sansão olhou ao redor, pegou apenas o que havia no chão...

E com aquilo, dispersou o exército inteiro!

As pessoas ficavam boquiabertas ao ver aquele homem enorme, de cabelos compridos balançando ao vento, fazendo coisas que pareciam impossíveis.

Mas Sansão sabia:

— Não sou eu. É Deus que me dá essa força.`,
      },
      {
        title: "O Segredo dos Cabelos",
        imageUrl: "/images/historias/sansao-cena-3.svg",
        text: `Sansão se tornou juiz de Israel — um líder que protegia o povo por 20 anos.

Os filisteus temiam Sansão e tentavam de tudo para descobrir de onde vinha sua força.

Um dia, Sansão se apaixonou por uma mulher chamada Dalila.

Os líderes filisteus foram até ela e ofereceram muito dinheiro:

— Descubra de onde vem a força de Sansão!

Dalila perguntou a Sansão várias vezes, com voz mansa:

— Me conta, meu amor. Qual é o segredo da sua força?

Sansão resistiu muito tempo.

Mas um dia, cansado, ele contou:

— Se cortarem meu cabelo, minha força vai embora. Porque meu cabelo é o sinal de que pertenço a Deus.

Dalila foi direto contar aos filisteus.

E enquanto Sansão dormia, cortaram seus cabelos.

Quando ele acordou, a força havia ido.`,
      },
      {
        title: "A Queda e o Arrependimento",
        imageUrl: "/images/historias/sansao-cena-4.svg",
        text: `Os filisteus prenderam Sansão.

Era o homem mais forte do mundo — agora sem força nenhuma.

Eles o levaram para sua cidade, o colocaram para trabalhar duro, e comemoravam:

— Pegamos Sansão! Vencemos o campeão de Israel!

Sansão ficou na prisão, com o coração pesado.

Ele havia errado. Havia confiado em alguém que não merecia confiança. E havia perdido algo precioso por causa disso.

Mas nos dias sombrios da prisão, Sansão fez uma coisa importante.

Orou.

Pediu perdão a Deus.

E enquanto rezava, uma coisa acontecia lentamente, sem que ninguém percebesse.

Seus cabelos iam crescendo.

Devagar.

Um centímetro, dois centímetros, mais e mais.

E junto com os cabelos, algo mais estava voltando.`,
      },
      {
        title: "A Segunda Chance",
        imageUrl: "/images/historias/sansao-cena-5.svg",
        text: `Os filisteus fizeram uma grande festa e trouxeram Sansão para o meio do salão para se divertir às custas dele.

O salão estava cheio — três mil pessoas em cima e no nível do chão.

Sansão pediu ao menino que o guiava:

— Me leva até as colunas do meio que sustentam o prédio. Preciso me apoiar nelas.

E então Sansão orou em silêncio, com o coração aberto:

— Senhor Deus, lembra de mim. Me dá força uma última vez.

Com as duas mãos nas duas colunas centrais, Sansão respirou fundo.

E empurrou com tudo.

As colunas cederam. O teto desabou.

Naquele dia, Sansão cumpriu sua missão — proteger o povo de Deus.

A história de Sansão nos ensina algo poderoso:

A força que vem de Deus é diferente de tudo.

E mesmo quando erramos e caímos, Deus ainda ouve quando clamamos.

Ainda pode nos usar.

Ainda dá segunda chance.`,
      },
    ],
  },
  // ── Novo Testamento (continuação) ───────────────────────────────────────
  {
    imageUrl: "/images/historias/o-filho-prodigo.svg",
    slug: "o-filho-prodigo",
    title: "O Filho Pródigo",
    subtitle: "O amor de um pai que nunca desiste",
    description:
      "Um filho pediu toda a herança do pai, foi embora e gastou tudo. Quando voltou, esperava ser recusado — mas o que encontrou foi diferente de tudo que podia imaginar!",
    readingTime: "8 min",
    ageRange: "4–8 anos",
    emoji: "🏃",
    gradient: "from-pink-400 via-rose-400 to-red-400",
    bgColor: "bg-pink-50",
    accentColor: "text-rose-700",
    bibleReference: "Lucas 15:11–32",
    testament: "novo",
    moralLesson:
      "Não importa o que você fez ou para onde foi — o pai sempre está esperando com os braços abertos para te receber de volta!",
    scenes: [
      {
        title: "O Pedido Que Magoou",
        imageUrl: "/images/historias/o-filho-prodigo-cena-1.svg",
        text: `Jesus contou uma história sobre um pai e seus dois filhos.

O filho mais novo foi até o pai e disse:

— Pai, eu quero minha parte da herança agora.

Era como dizer: "Não preciso mais de você."

O pai ficou com o coração partido. Mas dividiu tudo que tinha e entregou ao filho.

Poucos dias depois, o filho fez as malas e foi embora para um país distante.

E lá, começou a gastar tudo — festas, presentes, amigos falsos que só ficavam quando o dinheiro durava.

Ia ao restaurante caro, comprava roupas bonitas, convidava todo mundo para festa.

E as pessoas aplaudiam e sorriam.

Mas enquanto o dinheiro ia embora, o coração ficava cada vez mais vazio.

Será que aquele filho sabia o que estava deixando para trás?`,
      },
      {
        title: "A Vida Que Veio Depois",
        imageUrl: "/images/historias/o-filho-prodigo-cena-2.svg",
        text: `Em pouco tempo, o dinheiro acabou.

E junto com o dinheiro, foram embora os "amigos".

Para piorar, uma grande seca chegou àquela terra. Não tinha comida, não tinha trabalho, não tinha nada.

O filho ficou tão desesperado que foi pedir emprego numa fazenda cuidando de porcos.

Ele tinha tanta fome que olhava para a comida dos porcos e quase chorava.

Ninguém lhe dava nada.

Sentado na lama daquela fazenda, longe de tudo e de todos, o filho começou a pensar.

— Espera. Os empregados do meu pai têm comida de sobra... e eu aqui morrendo de fome!

E então, algo importante aconteceu dentro dele.

Ele se lembrou de casa.

Do cheiro da cozinha da mãe. Do sorriso do pai. Da cama macia. Do café da manhã.

E um plano começou a se formar.`,
      },
      {
        title: "O Caminho de Volta",
        imageUrl: "/images/historias/o-filho-prodigo-cena-3.svg",
        text: `O filho levantou da lama, sacudiu a roupa surrada e tomou uma decisão.

— Vou voltar para o meu pai. Vou dizer: "Pai, errei contra o céu e contra você. Não mereço mais ser chamado de seu filho. Me aceite como empregado."

E começou a caminhar.

Cada passo era pesado.

E se o pai fechasse a porta na sua cara?

E se dissesse: "Você não é mais meu filho"?

E se os empregados rissem dele?

O filho caminhava com a cabeça baixa, imaginando mil formas de ser rejeitado.

Mas então, ainda longe de casa, quando dava para ver ao longe o telhado da fazenda familiar...

Algo aconteceu.`,
      },
      {
        title: "A Corrida do Pai",
        imageUrl: "/images/historias/o-filho-prodigo-cena-4.svg",
        text: `O pai estava na varanda, como fazia todos os dias.

Esperando.

Olhando para o horizonte.

Porque um pai que ama não desiste de esperar.

E quando viu ao longe aquela silhueta caminhando pela estrada empoeirada — aquele jeito de andar que só um pai reconhece — o coração disparou.

— MEU FILHO!

O pai não esperou o filho chegar.

Levantou as vestes e saiu correndo! Correndo com tudo que tinha, pelo caminho, levantando poeira, sem se importar com o que os vizinhos iam pensar.

Chegou até o filho antes que ele pudesse terminar o discurso que havia ensaiado.

E o abraçou com força.

O filho começou a falar, cheio de vergonha:

— Pai, errei contra o céu e contra você. Não mereço mais ser chamado de—

Mas o pai já estava gritando para os empregados:

— TRAGAM A MELHOR ROUPA! CALÇADOS! UM ANEL! E PREPAREM UM BANQUETE — meu filho estava perdido e foi encontrado!`,
      },
      {
        title: "A Festa do Amor",
        imageUrl: "/images/historias/o-filho-prodigo-cena-5.svg",
        text: `E fizeram uma festa enorme!

Música, dança, comida boa, risos e alegria.

O filho sentado à mesa, com roupa limpa e cheia de cor, olhava em volta e mal conseguia acreditar.

Não havia punição. Não havia sermão. Não havia "eu te disse".

Havia apenas amor — cheio, transbordante, sem cobrar nada.

Jesus contou essa história para mostrar como Deus é.

Deus é como esse pai.

Quando você erra e resolve voltar — mesmo envergonhado, mesmo sabendo que errou — Ele já está correndo em sua direção.

Com os braços abertos.

Com uma festa preparada.

Porque para Deus, o momento em que você volta é o momento mais feliz de todos.

E nenhum filho que volta de coração aberto chega ao Pai e é mandado embora.

Nunca.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/zaqueu.svg",
    slug: "zaqueu",
    title: "Zaqueu Sobe na Árvore",
    subtitle: "O dia em que Jesus foi à sua casa",
    description:
      "Zaqueu era baixinho e cobrador de impostos — todo mundo o evitava. Mas quando Jesus passou por sua cidade, algo mudou para sempre!",
    readingTime: "7 min",
    ageRange: "3–7 anos",
    emoji: "🌳",
    gradient: "from-green-400 via-emerald-400 to-teal-400",
    bgColor: "bg-green-50",
    accentColor: "text-green-700",
    bibleReference: "Lucas 19:1–10",
    testament: "novo",
    moralLesson:
      "Jesus enxerga além dos nossos erros e nos chama pelo nome. Quando Ele entra na nossa vida, tudo muda!",
    scenes: [
      {
        title: "O Homem Que Ninguém Gostava",
        imageUrl: "/images/historias/zaqueu-cena-1.svg",
        text: `Em Jericó, havia um homem chamado Zaqueu.

Zaqueu tinha dois problemas: era bem baixinho e era cobrador de impostos.

O segundo problema era o maior.

Cobradores de impostos cobravam mais do que deveriam e ficavam com a diferença para si. Por isso, todo mundo os detestava.

Quando Zaqueu passava pela rua, as pessoas desviavam o olhar.

— Lá vem o ladrão... — murmuravam.

As crianças não podiam brincar com os filhos dos cobradores de impostos.

Nos mercados, as pessoas cobravam o preço dobrado dele.

Zaqueu tinha muito dinheiro. Mas não tinha amigos. Não tinha a paz que queria.

Por dentro, havia uma parte vazia que o dinheiro não conseguia preencher.

E foi nesse momento que ele ouviu uma notícia:

— Jesus vai passar por Jericó!`,
      },
      {
        title: "A Subida na Árvore",
        imageUrl: "/images/historias/zaqueu-cena-2.svg",
        text: `Zaqueu queria muito ver Jesus.

Ele havia ouvido histórias — que Jesus curava doentes, que conversava com pessoas que ninguém queria perto, que tratava todos com respeito.

Aquilo mexia com algo dentro de Zaqueu.

Mas havia um problema.

A multidão era enorme. Pessoas por toda parte, empurrando, tentando ver.

E Zaqueu era pequeno demais.

Ele subia na ponta dos pés. Tentava espiar pelos ombros de quem estava na frente.

Nada.

E então teve uma ideia.

Correu mais rápido do que todos pela rua — afinal, sabia muito bem qual era o caminho. Chegou a uma figueira enorme, olhou para cima...

E começou a subir.

Adulto, cobrador de impostos importante, terno e tudo — escalando uma árvore como um menino.

As pessoas ao redor riram. Mas Zaqueu não ligou.

Chegou até um galho bem alto, se segurou com firmeza e esperou.`,
      },
      {
        title: "Jesus Para Bem Debaixo",
        imageUrl: "/images/historias/zaqueu-cena-3.svg",
        text: `A multidão foi chegando, ondulando como um mar de cabeças.

E então Zaqueu viu.

Era Jesus.

Simples, mas com algo diferente — um jeito de olhar as pessoas que Zaqueu nunca havia visto antes.

Jesus foi caminhando pela rua... chegou à figueira... e parou.

Olhou para cima.

E os olhos de Jesus encontraram os olhos de Zaqueu bem no meio das folhas.

Zaqueu quase caiu do susto.

— Zaqueu! — chamou Jesus, com um sorriso nos olhos.

Como Ele sabia o nome dele?!

— Desça logo! Hoje preciso ficar na sua casa!

A multidão ao redor explodiu em murmúrios:

— Como assim? Na casa DELE?! De um cobrador de impostos?!

Mas Zaqueu já estava descendo — tão rápido que quase escorregou.

E quando chegou ao chão, o coração estava disparado.

Jesus queria ir à sua casa.`,
      },
      {
        title: "A Transformação",
        imageUrl: "/images/historias/zaqueu-cena-4.svg",
        text: `Zaqueu recebeu Jesus na sua casa com alegria — uma alegria que ele havia esquecido que existia.

Sentaram à mesa. Conversaram. Jesus não falou sobre os erros de Zaqueu — simplesmente estava lá, presente, como se Zaqueu fosse a pessoa mais importante do mundo.

E foi acontecendo uma coisa por dentro de Zaqueu.

O peso foi saindo.

A dureza foi derretendo.

Aquela parte vazia ia sendo preenchida por algo muito maior do que dinheiro.

No meio da conversa, Zaqueu levantou e disse para Jesus com os olhos brilhando:

— Senhor! Vou dar metade de tudo que tenho para os pobres. E se cobrei mais de alguém do que devia, vou devolver quatro vezes mais!

A sala ficou em silêncio.

Aquele não era o Zaqueu de antes.

Jesus sorriu.`,
      },
      {
        title: "Uma Casa Que Mudou",
        imageUrl: "/images/historias/zaqueu-cena-5.svg",
        text: `Jesus olhou para Zaqueu e disse:

— Hoje a salvação chegou a esta casa! Eu vim para buscar e salvar as pessoas perdidas — exatamente como você.

As pessoas de fora ainda não entendiam muito bem o que havia acontecido.

Mas Zaqueu sabia.

Naquele dia, Jesus não havia olhado para o seu passado, seus erros ou o que as pessoas diziam sobre ele.

Tinha olhado para ele.

Para quem ele era de verdade, lá dentro.

E isso mudou tudo.

Às vezes, a coisa que mais precisamos não é de um sermão ou de punição.

É de alguém que para, olha nos nossos olhos e diz nosso nome.

Jesus faz isso.

Com Zaqueu.

E com você também.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/bartimeu.svg",
    slug: "bartimeu",
    title: "Bartimeu Enxerga de Novo",
    subtitle: "A fé que não se cala",
    description:
      "Bartimeu era cego e pedia esmola na beira da estrada. Quando soube que Jesus passava por ali, gritou com toda a força — e não parou mesmo quando mandaram ele ficar quieto!",
    readingTime: "7 min",
    ageRange: "3–7 anos",
    emoji: "👁️",
    gradient: "from-amber-400 via-yellow-400 to-lime-400",
    bgColor: "bg-amber-50",
    accentColor: "text-amber-700",
    bibleReference: "Marcos 10:46–52",
    testament: "novo",
    moralLesson:
      "Quando clamamos a Jesus com fé — sem desistir — Ele ouve e age. Nossa fé nos cura!",
    scenes: [
      {
        title: "Na Beira da Estrada",
        imageUrl: "/images/historias/bartimeu-cena-1.svg",
        text: `Na saída da cidade de Jericó, todo dia, havia um homem sentado na beira da estrada.

Seu nome era Bartimeu.

Bartimeu não enxergava nada. Desde que se lembrava, o mundo para ele era escuridão.

Ele se sentava ali todos os dias com um pano dobrado à frente, esperando que as pessoas que passavam jogassem algumas moedinhas.

As pessoas passavam sem olhar.

Algumas jogavam uma moeda sem nem parar.

Outras desviavam para não precisar ver.

Bartimeu sabia quando alguém passava pelo barulho dos passos, pelo cheiro, pelas conversas ao longe.

Ele conhecia todos os sons daquela estrada.

Mas dentro do peito, havia um desejo que não saía.

— Um dia... um dia as coisas vão ser diferentes.

E aquele dia chegou quando ele ouviu um barulho diferente vindo da estrada.`,
      },
      {
        title: "A Notícia que Chegou",
        imageUrl: "/images/historias/bartimeu-cena-2.svg",
        text: `O barulho foi crescendo. Muitas vozes, muitas sandálias batendo no chão.

Bartimeu esticou o pescoço, tentando entender.

— O que está acontecendo? — perguntou.

— É Jesus de Nazaré! Está passando pela cidade! — alguém respondeu.

Jesus.

Bartimeu havia ouvido falar.

Que Ele curava doentes. Que abria os olhos de cegos. Que tratava todo mundo com amor.

Algo queimou no peito de Bartimeu.

Era agora ou nunca.

Sem hesitar, sem pensar duas vezes, Bartimeu encheu os pulmões de ar e gritou com toda a força que tinha:

— JESUS! FILHO DE DAVI! TEM MISERICÓRDIA DE MIM!

As pessoas ao redor se viraram com cara feia.

— Cala a boca! Para de gritar! Você está atrapalhando!

Mas Bartimeu gritou ainda mais alto.`,
      },
      {
        title: "Jesus Para",
        imageUrl: "/images/historias/bartimeu-cena-3.svg",
        text: `— FILHO DE DAVI, TEM MISERICÓRDIA DE MIM!

E então aconteceu.

Jesus parou.

Em meio a toda aquela multidão, com gente chamando de todos os lados, Jesus parou.

— Chamem ele aqui.

As mesmas pessoas que haviam mandado Bartimeu calar a boca agora foram até ele com um jeito diferente:

— Coragem! Levante! Ele está chamando você!

Bartimeu jogou fora o seu manto — a coisa mais valiosa que ele tinha. Era o que protegia do frio, era onde dormia, era sua única propriedade.

Mas jogou fora sem hesitar.

Levantou de um pulo e foi tropeçando em direção a Jesus, guiado pelas vozes.

Quando chegou perto, sentiu uma presença diferente.

Uma paz que não sabia explicar.`,
      },
      {
        title: "A Pergunta de Jesus",
        imageUrl: "/images/historias/bartimeu-cena-4.svg",
        text: `Jesus perguntou:

— O que você quer que eu faça por você?

Bartimeu quase sorriu.

Que pergunta.

Qualquer um podia ver o que ele precisava.

Mas Jesus perguntou do mesmo jeito — porque queria que Bartimeu pedisse. Queria ouvir da própria boca.

— Mestre — disse Bartimeu sem hesitar — quero enxergar!

Nenhuma rodeio. Nenhuma vergonha. Pedido direto.

Jesus olhou para aquele homem que havia gritado mesmo quando mandaram calar, que havia jogado o manto fora sem pensar duas vezes, que havia pedido sem vergonha o que precisava.

E disse com carinho:

— Vá. A sua fé te curou.`,
      },
      {
        title: "A Luz que Chegou",
        imageUrl: "/images/historias/bartimeu-cena-5.svg",
        text: `E na mesma hora — na mesma hora — Bartimeu enxergou.

A luz entrou de repente.

Cores. Formas. Rostos.

O céu azul. As árvores verdes. As roupas coloridas da multidão.

E ali na frente: Jesus.

Bartimeu ficou parado por um momento, piscando, com os olhos cheios de lágrimas.

Então começou a seguir Jesus pelo caminho, louvando a Deus.

As pessoas ao redor viram tudo e também começaram a louvar.

Aquele que antes pedia esmola na beira da estrada agora caminhava ao lado de Jesus, enxergando cada detalhe do caminho.

E a lição que ficou é simples:

Não fique quieto quando precisa de Jesus.

Grite se precisar.

Ignore quem mandar você calar a boca.

Porque Jesus para.

Jesus ouve.

E a fé de verdade recebe o que pede.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/maria-e-marta.svg",
    slug: "maria-e-marta",
    title: "Maria e Marta",
    subtitle: "O que é mais importante?",
    description:
      "Quando Jesus foi visitar as irmãs Maria e Marta, cada uma fez uma escolha diferente. Qual das duas escolheu a melhor parte? A resposta vai te surpreender!",
    readingTime: "6 min",
    ageRange: "3–7 anos",
    emoji: "🌸",
    gradient: "from-purple-400 via-violet-400 to-indigo-400",
    bgColor: "bg-purple-50",
    accentColor: "text-purple-700",
    bibleReference: "Lucas 10:38–42",
    testament: "novo",
    moralLesson:
      "Estar com Jesus e ouvir o que Ele tem a dizer é a coisa mais importante — mais do que qualquer tarefa!",
    scenes: [
      {
        title: "A Casa das Irmãs",
        imageUrl: "/images/historias/maria-e-marta-cena-1.svg",
        text: `Num vilarejo chamado Betânia, moravam duas irmãs: Marta e Maria.

As duas eram muito diferentes uma da outra.

Marta era agitada, animada, sempre em movimento. Se havia algo para fazer, ela estava fazendo. Se havia algo para organizar, ela organizava.

Maria era mais quieta. Gostava de sentar, escutar, contemplar.

As duas amavam Jesus muito.

Um dia, Jesus e seus discípulos estavam passando por Betânia — e Marta os convidou para entrar.

— Jesus! Que alegria! Entre, entre! Vou preparar o melhor jantar da sua vida!

E saiu correndo para a cozinha.

Maria entrou junto com os visitantes e foi se sentar bem pertinho de Jesus.

E ficou lá, ouvindo cada palavra que Ele dizia.

Com os olhos brilhando.

Com um sorriso no canto da boca.`,
      },
      {
        title: "A Confusão na Cozinha",
        imageUrl: "/images/historias/maria-e-marta-cena-2.svg",
        text: `Na cozinha, Marta estava a mil.

Mexia a panela, verificava o pão no forno, colocava os pratos, arrumava as almofadas, varrendo um canto, ajeitando uma flor.

Tudo ao mesmo tempo.

A sala estava cheia de risos e conversas — e Marta não podia parar nem um segundo para ouvir.

Ela espiou pela porta.

Maria estava bem ali, sentada aos pés de Jesus, com o queixo apoiado nas mãos, ouvindo tudo.

Marta bufou.

— Sério?! Eu aqui me matando de trabalho e minha irmã fica sentada que nem convidada?!

O suor escorria. A panela borbulhava. Os pés doíam.

E Maria... não se movia.

Marta limpou as mãos no avental, respirou fundo e foi até a sala.

Com a voz um pouco mais alta do que pretendia, disse:

— Jesus, não liga não que minha irmã fica aí sentada enquanto eu faço tudo sozinha?! Manda ela me ajudar!`,
      },
      {
        title: "A Resposta de Jesus",
        imageUrl: "/images/historias/maria-e-marta-cena-3.svg",
        text: `Todos olharam para Marta.

Jesus olhou para ela com gentileza — não com raiva, não com reprovação.

Com carinho.

— Marta, Marta...

O jeito que Ele disse o nome dela duas vezes era cheio de afeto. Como quando alguém que a gente ama nos chama porque quer nossa atenção de verdade.

— Você está preocupada e agitada com muitas coisas.

Marta piscou.

— Mas só uma coisa é necessária.

Jesus olhou para Maria, sentada quietinha.

— Maria escolheu a melhor parte — e isso não vai ser tirado dela.

Silêncio na sala.

Marta ficou parada com o avental nas mãos.

Não era uma bronca.

Era um convite.`,
      },
      {
        title: "O Que Jesus Queria",
        imageUrl: "/images/historias/maria-e-marta-cena-4.svg",
        text: `Jesus não estava dizendo que cozinhar era errado.

Ou que organizar a casa era errado.

Estava dizendo que havia algo mais precioso do que tudo isso:

Ficar com Ele.

Ouvir Ele.

Às vezes a gente fica tão ocupada fazendo coisas PARA Jesus que esquece de estar COM Jesus.

Marta queria mostrar amor preparando uma refeição.

E isso era lindo!

Mas Maria entendeu que quando Jesus está na sala, o melhor presente que você pode dar a Ele é a sua atenção.

Ao longo do tempo, as duas irmãs foram ficando muito amigas de Jesus.

Marta foi aprendendo a parar.

Maria foi aprendendo a colaborar.

E as duas descobriram que o amor tem muitas formas — e a mais importante começa pelo coração quieto que escuta.`,
      },
      {
        title: "A Melhor Parte",
        imageUrl: "/images/historias/maria-e-marta-cena-5.svg",
        text: `Depois do jantar — que ficou delicioso, porque Marta fez com amor — todos se sentaram juntos.

E desta vez, Marta também se sentou.

Deixou os pratos de lado por um momento.

Deixou o avental na cadeira.

E ficou ouvindo Jesus.

E foi naquele silêncio aconchegante — com o cheiro de comida boa no ar, a luz da lamparina tremulando, as vozes ao redor — que Marta entendeu.

Aquele momento não voltaria.

Jesus um dia ia embora.

E cada palavra que Ele dizia era um tesouro que poderia guardar para sempre no coração.

E você?

Na sua vida agitada, com tarefas e deveres e mil coisas para fazer —

Você consegue parar e se sentar pertinho de Jesus?

Ouvir o que Ele tem a dizer?

Essa é a melhor parte.

E ninguém pode tirar de você.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/o-bom-samaritano.svg",
    slug: "o-bom-samaritano",
    title: "O Bom Samaritano",
    subtitle: "Quem é o meu próximo?",
    description:
      "Um homem foi atacado e ficou ferido na estrada. Várias pessoas passaram sem ajudar. Mas então veio alguém inesperado — e mostrou o que significa amar de verdade!",
    readingTime: "7 min",
    ageRange: "4–8 anos",
    emoji: "🤝",
    gradient: "from-orange-400 via-amber-400 to-yellow-400",
    bgColor: "bg-orange-50",
    accentColor: "text-orange-700",
    bibleReference: "Lucas 10:25–37",
    testament: "novo",
    moralLesson:
      "Nosso próximo é qualquer pessoa que precisa de ajuda — e amar de verdade é agir, não só sentir!",
    scenes: [
      {
        title: "A Pergunta do Especialista",
        imageUrl: "/images/historias/o-bom-samaritano-cena-1.svg",
        text: `Um dia, um especialista em leis foi falar com Jesus.

— Mestre, o que devo fazer para ter a vida eterna?

Jesus respondeu com uma pergunta:

— O que está escrito na lei? O que você lê lá?

O especialista respondeu na hora, com voz firme:

— Ame a Deus com todo o seu coração, com toda a sua alma, com todas as suas forças e com toda a sua mente. E ame o seu próximo como a si mesmo.

— Certo! — disse Jesus. — Faça isso e você terá a vida.

Mas o especialista queria mostrar que era inteligente. Então perguntou:

— Mas... quem é o meu próximo?

Jesus sorriu.

E em vez de dar uma resposta direta, fez o que mais gostava: contou uma história.`,
      },
      {
        title: "O Homem na Estrada",
        imageUrl: "/images/historias/o-bom-samaritano-cena-2.svg",
        text: `— Um homem estava viajando de Jerusalém para Jericó — começou Jesus.

Era uma estrada perigosa, cheia de curvas e esconderijos entre as rochas.

E de repente — ladrões!

Saíram das pedras, cercaram o homem, roubaram tudo que ele tinha, bateram nele com força e foram embora, deixando-o caído na estrada, ferido, sem conseguir se mexer.

O homem ficou ali, com ferimentos, sem água, sem ajuda.

O sol estava quente.

As horas passavam.

E de longe, ele viu:

Uma silhueta vindo pela estrada.

— Alguém está vindo! — pensou ele com alívio.

Mas a silhueta chegou mais perto, olhou para o lado onde ele estava...

E passou direto do outro lado.`,
      },
      {
        title: "Os Que Passaram",
        imageUrl: "/images/historias/o-bom-samaritano-cena-3.svg",
        text: `Era um sacerdote — alguém que trabalhava no templo e conhecia as leis de Deus de cor.

Ele viu o homem ferido.

Mas foi para o outro lado da estrada e passou.

Talvez com pressa. Talvez com medo. Talvez achando que era problema de outro.

O homem ferido olhou com esperança para a próxima silhueta que apareceu.

Era um levita — um ajudante do templo, também muito religioso.

Ele também viu.

Também se aproximou.

Também foi para o outro lado e passou.

O homem gemeu de dor e fechou os olhos.

As pessoas mais religiosas haviam passado. E nenhuma havia parado.

E então ouviu mais uma vez o som de passos na estrada.

Só que desta vez, acompanhados pelo caminhar tranquilo de um burro.`,
      },
      {
        title: "O Que Parou",
        imageUrl: "/images/historias/o-bom-samaritano-cena-4.svg",
        text: `Era um samaritano.

Os samaritanos e os judeus não se davam bem há muitos anos. Havia uma briga antiga entre os dois povos.

E este samaritano podia muito bem ter passado também.

Afinal, aquele homem ferido provavelmente era judeu — alguém que talvez nem olhasse para ele em circunstâncias normais.

Mas o samaritano parou.

Desceu do burro.

Ajoelhou ao lado do homem.

Com cuidado, limpou as feridas, colocou azeite e vinho para cuidar dos machucados e os enfaixou.

Ajudou o homem a montar no burro.

E o levou até uma hospedaria próxima.

Lá, cuidou dele a noite toda.

Na manhã seguinte, tirou dinheiro do bolso — o equivalente a dois dias de trabalho — e entregou ao dono da hospedaria:

— Cuide dele. Se gastar mais, quando eu voltar eu pago.`,
      },
      {
        title: "O Verdadeiro Próximo",
        imageUrl: "/images/historias/o-bom-samaritano-cena-5.svg",
        text: `Jesus terminou a história e perguntou ao especialista:

— Qual dos três você acha que foi o próximo do homem que caiu nas mãos dos ladrões?

O especialista respondeu, quase sem querer:

— O que teve misericórdia dele.

Jesus olhou nos seus olhos e disse:

— Então vá e faça o mesmo.

Três pessoas viram o mesmo homem ferido.

Duas tinham conhecimento de Deus — e passaram.

Uma não sabia muito, era de um povo diferente, poderia ter passado por razões políticas ou históricas.

Mas parou.

Porque amor não é o que você sente.

É o que você faz quando passa pela pessoa que precisa.

O seu próximo não é só quem mora ao lado, quem fala a mesma língua ou torce pelo mesmo time.

É a pessoa na sua frente que precisa de ajuda.

E quando você ajuda ela — você está amando a Deus.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/adao-e-eva.svg",
    slug: "adao-e-eva",
    title: "Adão e Eva no Jardim do Éden",
    subtitle: "O primeiro jardim do mundo",
    description:
      "No início de tudo, Deus criou um jardim maravilhoso chamado Éden e colocou lá os primeiros seres humanos: Adão e Eva. Descubra como eles viveram, quais escolhas fizeram e o que aprendemos com essa história.",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "🌿",
    gradient: "from-green-500 via-emerald-400 to-teal-400",
    bgColor: "bg-green-50",
    accentColor: "text-green-700",
    bibleReference: "Gênesis 2–3",
    testament: "velho",
    moralLesson:
      "Obedecer a Deus nos protege e nos mantém perto do Seu amor. Mesmo quando erramos, Deus nunca deixa de cuidar de nós.",
    scenes: [
      {
        imageUrl: "/images/historias/adao-e-eva-cena-1.svg",
        title: "O Jardim Mais Lindo do Mundo",
        text: `Depois de criar o céu, a terra, o mar e todos os animais, Deus plantou um jardim especial no lugar chamado Éden. Era o lugar mais bonito que existia!

Havia árvores com frutas coloridas e saborosas, flores perfumadas de todas as cores, rios de água cristalina que cantavam suavemente ao correr entre as pedras. Pássaros de plumas brilhantes voavam entre os galhos, e animais mansos passeavam tranquilamente por ali.

No meio do jardim, Deus plantou duas árvores muito especiais: a Árvore da Vida e a Árvore do Conhecimento do Bem e do Mal.

Então Deus fez algo extraordinário: moldou com barro da terra o primeiro homem e soprou em seus narinos o fôlego da vida. O homem abriu os olhos, respirou fundo e acordou! Deus o chamou de Adão.

— Cuide deste jardim com carinho — disse Deus com amor. — Tudo o que há aqui é para você!

Adão olhou ao redor e sorriu. Era tudo tão lindo que ele mal conseguia acreditar.`,
      },
      {
        imageUrl: "/images/historias/adao-e-eva-cena-2.svg",
        title: "Adão e Eva, Juntos",
        text: `Adão cuidava do jardim com alegria. Ele dava nome a todos os animais — ao leão, à girafa, ao coelho, ao peixe. Mas mesmo cercado de tantas criaturas maravilhosas, Adão sentia que faltava algo.

Deus viu que não era bom para o homem ficar sozinho. Então, enquanto Adão dormia profundamente, Deus tirou uma costela dele e fez uma mulher. Quando Adão acordou e a viu, seu coração saltou de alegria!

— Ela é osso dos meus ossos e carne da minha carne! — exclamou Adão feliz.

Deus a chamou de Eva. Os dois se tornaram companheiros inseparáveis, caminhando juntos pelo jardim, cuidando das plantas, brincando com os animais e conversando com Deus todas as tardes.

A vida no Éden era perfeita. Eles não sentiam frio nem calor demais, não havia dor nem tristeza. Deus visitava o jardim e conversava com eles como um pai amoroso que ama seus filhos. Era a mais perfeita felicidade.`,
      },
      {
        imageUrl: "/images/historias/adao-e-eva-cena-3.svg",
        title: "A Serpente Enganadora",
        text: `Havia no jardim uma serpente muito esperta e astuta. Ela se aproximou de Eva num dia e começou a conversar de um jeito traiçoeiro.

— É verdade que Deus disse que vocês não podem comer de nenhuma árvore do jardim? — perguntou a serpente com voz mansa.

— Podemos comer de todas as árvores — respondeu Eva —, menos daquela árvore no meio do jardim. Deus disse que se comermos, morreremos.

— Não, não vão morrer! — mentiu a serpente. — Deus sabe que quando comerem, seus olhos vão se abrir e vocês vão ser como Ele, conhecendo o bem e o mal!

Eva olhou para a árvore. Os frutos pareciam tão bonitos, tão saborosos... Ela ficou querendo experimentar. Pensou que a serpente podia ter razão. Então colheu um fruto e comeu. Depois deu a Adão, que também comeu.

De repente, os dois se sentiram diferentes. Uma estranheza tomou conta deles. Eles perceberam que tinham desobedecido a Deus, e o coração apertou de vergonha.`,
      },
      {
        imageUrl: "/images/historias/adao-e-eva-cena-4.svg",
        title: "As Consequências da Desobediência",
        text: `À tarde, como de costume, Deus veio ao jardim. Mas dessa vez, Adão e Eva se esconderam atrás das árvores com medo.

— Adão, onde você está? — chamou Deus.

— Ouvi a Sua voz e fiquei com medo — respondeu Adão tremendo —, por isso me escondi.

— Você comeu da árvore que eu havia proibido? — perguntou Deus.

Adão tentou colocar a culpa em Eva. Eva tentou colocar a culpa na serpente. Mas Deus sabia de tudo.

Com o coração partido, Deus explicou que a desobediência teria consequências sérias. A vida fora do jardim seria mais difícil. Teriam de trabalhar muito para conseguir alimento. Haveria dor e cansaço que antes não existiam.

Com cuidado e amor, Deus fez roupas de pele para os dois, para que não ficassem com frio. Mesmo estando triste com a escolha deles, Ele continuou cuidando. Então, com muita saudade no coração, Adão e Eva deixaram o Jardim do Éden.`,
      },
      {
        imageUrl: "/images/historias/adao-e-eva-cena-5.svg",
        title: "Um Novo Começo com Deus",
        text: `Fora do jardim, a vida era diferente. O sol queimava mais forte, a terra era mais dura e havia muito trabalho a fazer. Adão e Eva sentiam falta do Éden, da paz perfeita que tinham lá.

Mas uma coisa não mudou: o amor de Deus por eles.

Deus não os abandonou. Ele continuou olhando por eles, protegendo-os, provendo o que precisavam. E mesmo com as dificuldades, Adão e Eva aprenderam algo valioso: quando obedecemos a Deus, nossa vida é mais feliz e mais completa.

A história de Adão e Eva nos ensina que Deus criou este mundo com amor, e Ele quer o melhor para cada um de nós. Às vezes somos tentados a fazer o que sabemos que não devemos, mas podemos sempre voltar a Deus e pedir perdão.

Porque o coração de Deus é tão grande que nunca para de amar seus filhos, não importa o que aconteça. E um dia, Ele prometeu enviar alguém especial para consertar tudo o que havia se quebrado — alguém que traria de volta a paz e o amor perfeitos para sempre.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/a-torre-de-babel.svg",
    slug: "a-torre-de-babel",
    title: "A Torre de Babel",
    subtitle: "Quando as pessoas quiseram tocar o céu",
    description:
      "Depois do dilúvio, as pessoas começaram a construir uma torre enorme para chegar ao céu. Mas Deus tinha outros planos para a humanidade. Descubra o que aconteceu com essa torre misteriosa!",
    readingTime: "7 min",
    ageRange: "3–8 anos",
    emoji: "🏗️",
    gradient: "from-orange-500 via-amber-400 to-yellow-300",
    bgColor: "bg-orange-50",
    accentColor: "text-orange-700",
    bibleReference: "Gênesis 11:1–9",
    testament: "velho",
    moralLesson:
      "A humildade nos ajuda a reconhecer que precisamos de Deus. Os planos Dele são sempre maiores e melhores do que os nossos.",
    scenes: [
      {
        imageUrl: "/images/historias/a-torre-de-babel-cena-1.svg",
        title: "Um Mundo com Uma Só Língua",
        text: `Muito tempo depois da grande arca de Noé, as pessoas se espalharam pelo mundo e formaram famílias cada vez maiores. Naquele tempo, algo muito especial acontecia: todo mundo no mundo inteiro falava a mesma língua!

Imagine como devia ser fácil! Não importava de onde você viesse, qualquer pessoa podia entender qualquer outra. Podiam contar histórias, cantar juntos, fazer negócios e ser amigos sem nenhuma dificuldade.

As pessoas aprenderam a fazer tijolos resistentes, cozidos no fogo. Descobriram como misturar betume, uma espécie de cola muito forte, para unir os tijolos. Com essas descobertas, podiam construir prédios cada vez maiores e mais resistentes.

Um dia, um grupo de pessoas se reuniu numa planície chamada Sinear e teve uma ideia. Uma ideia muito grande — talvez grande demais.

— Vamos nos fixar aqui! — disseram uns para os outros, entusiasmados. — Temos tudo o que precisamos para construir algo incrível!

E ali começou uma aventura que mudaria a história do mundo.`,
      },
      {
        imageUrl: "/images/historias/a-torre-de-babel-cena-2.svg",
        title: "O Grande Plano",
        text: `Reunidos na planície de Sinear, as pessoas começaram a fazer planos grandiosos. Quanto mais conversavam, mais animadas ficavam. Os olhos brilhavam e as mãos gesticulavam animadas.

— Vamos construir uma cidade! — propôs alguém.

— E uma torre! — gritou outro. — Uma torre tão alta que chegue até o céu!

— Assim ficaremos famosos para sempre — concordaram todos. — Ninguém jamais nos esqueçerá! Nosso nome será conhecido em toda a terra!

Havia, porém, algo errado nessa ideia. As pessoas não estavam construindo para honrar a Deus ou para ajudar os outros. Estavam construindo para se glorificar a si mesmas, para mostrar como eram poderosas, para provar que não precisavam de ninguém — nem de Deus.

Mesmo assim, se puseram ao trabalho imediatamente. Cada tijolo era cuidadosamente fabricado e empilhado. A torre começou a crescer — um andar, dois andares, três andares. Mais e mais alto ela subia, dia após dia, sob o sol quente da planície.`,
      },
      {
        imageUrl: "/images/historias/a-torre-de-babel-cena-3.svg",
        title: "Deus Observa a Torre",
        text: `Enquanto os tijolos se empilhavam e a torre subia cada vez mais alto, Deus olhava para o que estava acontecendo. Ele via não só a torre, mas o coração das pessoas — via o orgulho que as movia, o desejo de serem grandes sem precisar d'Ele.

Deus sabia que aquele caminho levaria as pessoas para longe de tudo que era bom. Se elas construíssem essa torre com esse coração orgulhoso, iriam querer coisas ainda maiores e mais perigosas. Precisava agir.

Então Deus desceu para ver a cidade e a torre que os homens estavam construindo. Ele percebeu que, falando todos a mesma língua e trabalhando juntos com tanta determinação, nada conseguiriam impedir que fizessem o que tinham em mente — mesmo que fosse errado.

Deus tinha um plano. Não um plano de punição cruel, mas um plano sábio que espalharia as pessoas pelo mundo inteiro, assim como Ele havia ordenado desde o início. Pois Deus havia dito: "Encham a terra!" — mas as pessoas queriam ficar todas juntas num único lugar, construindo monumentos para si mesmas.`,
      },
      {
        imageUrl: "/images/historias/a-torre-de-babel-cena-4.svg",
        title: "As Línguas Misturadas",
        text: `De repente, algo extraordinário aconteceu na obra da grande torre.

Um pedreiro pediu um tijolo ao seu colega — e o colega não entendeu nada! As palavras soavam estranhas, como se fossem de outro mundo.

— O que você disse? — perguntou o colega, confuso.

Mas a resposta veio numa língua que nenhum dos dois havia falado antes. Era como se as palavras tivessem embaralhado dentro da boca de cada um!

O caos se instalou na construção. Uns falavam de um jeito, outros de outro. Ninguém conseguia entender ninguém. Os construtores que antes trabalhavam em perfeita harmonia agora não conseguiam nem combinar quem ia buscar água!

Aos poucos, as pessoas que falavam a mesma língua foram se juntando. Famílias se reencontraram. Grupos foram se formando. E então, como não conseguiam mais se entender com os outros, os grupos começaram a partir em direções diferentes, espalhando-se pelo mundo — exatamente como Deus havia planejado desde o início.

A grande torre ficou inacabada, parada no meio da planície, como um lembrete daquele dia.`,
      },
      {
        imageUrl: "/images/historias/a-torre-de-babel-cena-5.svg",
        title: "Babel — O Nome que Ficou",
        text: `Aquele lugar ganhou um nome especial: Babel, que significa "confusão". E assim, a planície de Sinear ficou marcada na memória de todos como o lugar onde as línguas do mundo foram misturadas.

O que parecia uma punição tinha na verdade um propósito muito maior. As pessoas se espalharam por todos os cantos da terra, como Deus sempre quis. Foram para o leste e para o oeste, para o norte e para o sul. Formaram povos diferentes, culturas diferentes, línguas diferentes — cada uma com sua beleza única.

Hoje, no mundo, existem mais de sete mil línguas! Cada uma delas conta um pouco da história daquele dia em Babel, quando Deus lembrou às pessoas que os Seus planos são sempre maiores do que os nossos.

A história da Torre de Babel nos ensina uma lição muito importante: a verdadeira grandeza não está em construir torres para chegar ao céu, mas em ter um coração humilde que reconhece que precisamos de Deus.

Quando confiamos n'Ele e seguimos Seus caminhos, nossas vidas se tornam muito mais ricas, mais belas e mais cheias de sentido do que qualquer torre que possamos construir.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/samuel-e-a-voz-de-deus.svg",
    slug: "samuel-e-a-voz-de-deus",
    title: "Samuel e a Voz de Deus",
    subtitle: "O menino que aprendeu a ouvir",
    description:
      "Samuel era um menino que vivia no templo de Deus quando algo extraordinário aconteceu: Deus o chamou pelo nome durante a noite! Descubra como um garoto aprendeu a ouvir a voz de Deus.",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "👂",
    gradient: "from-indigo-500 via-blue-400 to-cyan-400",
    bgColor: "bg-indigo-50",
    accentColor: "text-indigo-700",
    bibleReference: "1 Samuel 3",
    testament: "velho",
    moralLesson:
      "Deus pode falar com qualquer pessoa, até mesmo com crianças. Quando ouvimos e obedecemos a Deus, nossa vida tem um propósito especial.",
    scenes: [
      {
        imageUrl: "/images/historias/samuel-e-a-voz-de-deus-cena-1.svg",
        title: "O Menino do Templo",
        text: `No tempo em que Eli era sacerdote, havia um menino chamado Samuel que vivia no templo de Deus. Ele tinha ido morar lá ainda pequenino, quando sua mãe Ana o trouxe para servir ao Senhor, como havia prometido.

Samuel cresceu no templo aprendendo tudo sobre como cuidar da Casa de Deus. Ele acendia as lâmpadas, varreia os corredores, ajudava Eli nas tarefas do dia a dia. Mesmo sendo criança, Samuel levava seu trabalho muito a sério.

Eli era velho e sua visão já não era boa. Por isso dependia muito da ajuda de Samuel. Os dois tinham uma relação especial — quase como avô e neto. Eli ensinava Samuel com paciência, e Samuel servia a Eli com carinho.

Era uma época em que a voz de Deus era rara de ouvir. As pessoas tinham se afastado d'Ele, e havia muito tempo que Deus não falava diretamente com alguém. Mas isso estava prestes a mudar — e um garotinho seria o escolhido para receber uma mensagem muito importante.`,
      },
      {
        imageUrl: "/images/historias/samuel-e-a-voz-de-deus-cena-2.svg",
        title: "Uma Voz na Noite",
        text: `Era uma noite tranquila no templo. As lâmpadas sagradas brilhavam suavemente no escuro. Samuel estava deitado em seu lugar, descansando, quando de repente ouviu uma voz chamá-lo!

— Samuel! Samuel!

O menino se levantou rapidinho. "Deve ser Eli me chamando", pensou. Correu até o quarto do velho sacerdote.

— Aqui estou! O senhor me chamou? — disse Samuel, ofegante.

Eli abriu os olhos com estranheza.

— Eu não chamei você, meu filho — respondeu Eli. — Volte para dormir.

Samuel voltou confuso. Deitou-se de novo. Mas logo a voz chamou outra vez:

— Samuel!

O menino se levantou de novo e foi correndo até Eli.

— Estou aqui! O senhor me chamou?

— Não chamei, filho — disse Eli, desta vez um pouco mais desperto. — Volte dormir.

Samuel voltou para seu lugar, seu coraçãozinho acelerado. Quem seria aquela voz? De onde ela vinha?`,
      },
      {
        imageUrl: "/images/historias/samuel-e-a-voz-de-deus-cena-3.svg",
        title: "É o Senhor!",
        text: `Pela terceira vez, a voz chamou no silêncio da noite:

— Samuel!

O menino se levantou mais uma vez e foi até Eli. Desta vez, o velho sacerdote entendeu o que estava acontecendo. Seu coração se encheu de admiração e de alegria. Era o próprio Deus quem estava chamando o menino!

— Volte e deite-se — disse Eli com voz suave e sábia. — E se Ele chamar novamente, diga: "Fala, Senhor, pois o Teu servo está ouvindo."

Samuel voltou para seu lugar com o coração batendo forte. Ele se deitou com cuidado, de olhos abertos no escuro, esperando. E então, mais uma vez, a voz veio — mais clara do que nunca:

— Samuel! Samuel!

Desta vez, o menino respondeu com coragem e com fé:

— Fala, Senhor, pois o Teu servo está ouvindo.

E Deus falou. Ele entregou ao menino Samuel uma mensagem importante, uma mensagem sobre o futuro de Israel. Samuel ouviu com toda a atenção, sem perder uma só palavra.`,
      },
      {
        imageUrl: "/images/historias/samuel-e-a-voz-de-deus-cena-4.svg",
        title: "Samuel Conta Tudo a Eli",
        text: `Quando a manhã chegou e a luz dourada do sol entrou pelo templo, Samuel ficou quieto por um tempo. A mensagem que Deus havia lhe dado era difícil de contar — ela falava sobre coisas tristes que aconteceriam com a família de Eli.

Samuel foi abrir as portas do templo, como fazia todas as manhãs, mas estava com medo de falar com o sacerdote. Eli, porém, o chamou logo cedo.

— Samuel, meu filho, o que o Senhor lhe disse? Não me esconda nada.

Samuel respirou fundo e contou tudo — cada palavra, do começo ao fim, sem esconder nada. Quando terminou, Eli ficou em silêncio por um momento. Então disse com uma voz calma e resignada:

— Ele é o Senhor. Que Ele faça o que bem entender.

Eli havia aceitado com humildade o que Deus havia dito. E Samuel aprendeu algo precioso naquele dia: dizer a verdade, mesmo quando é difícil, é uma forma de honrar a Deus.

A partir daquele dia, Samuel soube que tinha uma missão especial. E nunca mais teve medo de ouvir a voz de Deus.`,
      },
      {
        imageUrl: "/images/historias/samuel-e-a-voz-de-deus-cena-5.svg",
        title: "O Profeta que Começou Pequenininho",
        text: `Com o tempo, Samuel cresceu, e todos em Israel souberam que ele era um profeta de Deus. Toda vez que Samuel falava, as palavras de Deus estavam presentes. As pessoas vinham de longe para ouvir o que ele tinha a dizer.

Samuel se tornou um dos líderes mais importantes da história de Israel. Ele ungia reis, guiava o povo, e sempre mantinha seu coração voltado para Deus — exatamente como havia aprendido ainda criança, naquela noite em que ouviu a voz pela primeira vez.

Mas tudo começou com um simples menino deitado no templo escuro, disposto a ouvir.

A história de Samuel nos ensina algo muito especial: Deus não precisa esperar você crescer para falar com você. Ele pode colocar sonhos, ideias e palavras no seu coração agora, exatamente do jeito que você é.

Quando você ora e pede para Deus falar, quando lê a Bíblia e fica quietinho prestando atenção, você está fazendo exatamente o que Samuel fez naquela noite: dizendo a Deus com o coração — "Fala, Senhor, pois o Teu servo está ouvindo."`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/ester-a-rainha-corajosa.svg",
    slug: "ester-a-rainha-corajosa",
    title: "Ester, a Rainha Corajosa",
    subtitle: "A menina que salvou um povo inteiro",
    description:
      "Ester era uma jovem judia que se tornou rainha de um grande império. Quando seu povo estava em perigo, ela precisou de toda a coragem para falar com o rei e pedir ajuda. Essa é a história de uma heroína de verdade!",
    readingTime: "9 min",
    ageRange: "3–8 anos",
    emoji: "👑",
    gradient: "from-pink-500 via-rose-400 to-fuchsia-400",
    bgColor: "bg-pink-50",
    accentColor: "text-pink-700",
    bibleReference: "Ester 4–5",
    testament: "velho",
    moralLesson:
      "Com fé e coragem, podemos fazer grandes coisas. Às vezes chegamos a lugares especiais justamente para poder ajudar quem precisa.",
    scenes: [
      {
        imageUrl: "/images/historias/ester-a-rainha-corajosa-cena-1.svg",
        title: "Uma Jovem Especial",
        text: `No grande império persa, havia uma jovem chamada Ester que vivia sob os cuidados de seu primo Mardoqueu. Ester havia perdido seus pais ainda pequena, e Mardoqueu a criou com todo o amor do mundo, como se fosse sua própria filha.

Ester era gentil, bondosa e muito bonita — não só por fora, mas também por dentro. Seu sorriso iluminava qualquer lugar onde ela chegasse, e sua forma carinhosa de tratar as pessoas fazia com que todos gostassem dela.

Certo dia, o grande rei Assuero, que governava um império enorme que ia da Índia à Etiópia, quis encontrar uma nova rainha. Moças de todo o reino foram levadas ao palácio. Ester também foi.

No palácio, Ester agradou a todos. Era educada, sábia e meiga. O rei Assuero ficou encantado com ela desde o primeiro momento. Em pouco tempo, ele colocou a coroa em sua cabeça e declarou:

— Ester será minha rainha!

O coração de Ester bateu forte. Ela virou rainha! Mas havia um segredo que ela guardava: ninguém no palácio sabia que ela era judia.`,
      },
      {
        imageUrl: "/images/historias/ester-a-rainha-corajosa-cena-2.svg",
        title: "O Plano Malvado de Hamã",
        text: `No palácio, havia um homem muito poderoso chamado Hamã. O rei o havia honrado com um cargo muito alto, e todos faziam reverência a ele quando passava.

Mas Mardoqueu, o primo de Ester, não se curvava. Ele se recusava a se prostrar diante de Hamã, porque sua fé não permitia que adorasse qualquer homem como se fosse um deus.

Isso deixava Hamã furioso! De tanto ódio, ele não quis apenas se vingar de Mardoqueu. Hamã foi até o rei e inventou mentiras sobre o povo judeu, dizendo que eles eram perigosos para o reino. Pediu ao rei permissão para exterminar todos os judeus do império.

O rei, sem saber de toda a verdade, concordou e deu a Hamã seu anel real para selar o decreto.

Quando Mardoqueu soube do decreto terrível, ficou de coração partido. Estava vestido de luto, chorando na praça da cidade, junto com milhares de outros judeus que sabiam que seus dias estavam contados.

A notícia chegou aos ouvidos de Ester, e ela ficou apavorada. O que poderia fazer?`,
      },
      {
        imageUrl: "/images/historias/ester-a-rainha-corajosa-cena-3.svg",
        title: "Mardoqueu Fala com Ester",
        text: `Através de mensageiros, Mardoqueu enviou uma palavra urgente para Ester: ela precisava ir falar com o rei e pedir que ele salvasse o povo judeu.

Mas Ester respondeu explicando um problema muito sério: havia uma lei do palácio que dizia que ninguém podia se aproximar do rei sem ser chamado. Quem ousasse entrar no salão do trono sem permissão seria colocado à morte — a menos que o rei estendesse seu cetro dourado.

— Faz trinta dias que o rei não me chama — escreveu Ester com o coração apertado.

A resposta de Mardoqueu chegou com palavras poderosas:

— Ester, não pense que você vai escapar só porque está no palácio. Se você ficar quieta agora, a ajuda virá de outro lugar, mas você e sua família perecerão. Quem sabe se você não chegou ao reino precisamente para este momento?

Essas palavras tocaram fundo no coração de Ester. Ela ficou em silêncio por um longo tempo, pensando, orando.

E então tomou a decisão mais corajosa de sua vida.`,
      },
      {
        imageUrl: "/images/historias/ester-a-rainha-corajosa-cena-4.svg",
        title: "Ester Enfrenta o Rei",
        text: `Ester pediu que todos os judeus da cidade ficassem três dias em oração e jejum por ela. Ela e suas servas também fariam o mesmo. Depois disso, ela iria até o rei — mesmo sabendo do risco.

— Se eu morrer, morro — disse ela com voz firme.

Três dias depois, Ester se vestiu com suas roupas reais mais belas. Com o coração batendo forte e os pés firmes, ela caminhou pelos corredores do palácio e se pôs à entrada do salão do trono.

O rei Assuero estava sentado em seu trono dourado, imponente. Quando seus olhos encontraram Ester, algo se iluminou em seu rosto. Ele levantou seu cetro dourado e a apontou para ela — o sinal de que ela estava a salvo!

— O que você deseja, rainha Ester? — perguntou o rei. — Mesmo que seja metade do meu reino, te darei.

Ester respirou fundo. Então, com sabedoria, convidou o rei e Hamã para um banquete especial que ela prepararia. Havia chegado o momento de contar a verdade.

E com a ajuda de Deus, ela conseguiu.`,
      },
      {
        imageUrl: "/images/historias/ester-a-rainha-corajosa-cena-5.svg",
        title: "O Povo Salvo pela Coragem",
        text: `No banquete, com lágrimas nos olhos, Ester revelou ao rei a verdade: ela era judia, e o decreto de Hamã significava a morte dela e de todo o seu povo.

O rei ficou furioso ao descobrir a maldade de Hamã. Hamã foi punido por seus planos terríveis, e Mardoqueu, o fiel primo de Ester, foi honrado no palácio. O povo judeu foi salvo!

Toda a nação celebrou com grande alegria. O dia que devia ser de tristeza virou um dia de festa, de luz e de alegria. Esse dia de comemoração ficou marcado para sempre no calendário judeu, chamado Purim — e é celebrado até hoje!

A história de Ester nos ensina que a coragem não é a ausência do medo. Ester estava com medo — mas foi mesmo assim. Ela confiou que Deus estava com ela, e agiu.

Às vezes, você pode se perguntar por que está em determinado lugar ou situação. Talvez, como Ester, você esteja lá justamente para fazer uma diferença especial. Com fé, oração e coragem, até uma criança pode mudar o mundo ao seu redor.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/elias-e-o-carro-de-fogo.svg",
    slug: "elias-e-o-carro-de-fogo",
    title: "Elias e o Carro de Fogo",
    subtitle: "A viagem mais extraordinária da Bíblia",
    description:
      "Elias foi um dos profetas mais poderosos de Israel. Quando chegou a hora de partir, algo incrível aconteceu: um carro de fogo desceu do céu! E seu discípulo Eliseu testemunhou tudo. Conheça essa história fascinante!",
    readingTime: "8 min",
    ageRange: "4–8 anos",
    emoji: "🔥",
    gradient: "from-red-500 via-orange-400 to-yellow-400",
    bgColor: "bg-red-50",
    accentColor: "text-red-700",
    bibleReference: "2 Reis 2:1–12",
    testament: "velho",
    moralLesson:
      "Deus está presente nos momentos mais importantes de nossas vidas. Quando seguimos fielmente, Ele nos honra de maneiras que nunca imaginamos.",
    scenes: [
      {
        imageUrl: "/images/historias/elias-e-o-carro-de-fogo-cena-1.svg",
        title: "O Grande Profeta Elias",
        text: `Elias era um profeta de Deus como poucos que já existiram. Ele havia feito coisas incríveis em nome do Senhor: chamou chuva depois de três anos de seca terrível, trouxe fogo do céu, ressuscitou um menino e enfrentou centenas de falsos profetas sem tremer.

Por onde passava, as pessoas o reconheciam com admiração e respeito. Sua voz era como trovão, e suas palavras carregavam o peso de quem caminhava de mãos dadas com o Deus do universo.

Ao lado de Elias havia um jovem chamado Eliseu, que havia deixado tudo — sua família, sua terra, seus bois — para seguir o profeta e aprender com ele. Eliseu era dedicado, fiel e cheio de amor por Deus.

Juntos, eles viajavam pelo país, ensinando, curando e falando a palavra de Deus ao povo de Israel. A amizade entre os dois era profunda e verdadeira. Eliseu olhava para Elias como um filho olha para um pai.

Mas Deus havia preparado algo muito especial para o fim da jornada de Elias — algo que ninguém ainda havia visto no mundo inteiro.`,
      },
      {
        imageUrl: "/images/historias/elias-e-o-carro-de-fogo-cena-2.svg",
        title: "A Última Viagem",
        text: `Certo dia, Elias e Eliseu começaram uma longa caminhada de Gilgal. Elias sabia que aquele seria seu último dia na terra, e Deus havia revelado isso a ele.

Com gentileza, Elias tentou fazer Eliseu ficar para trás:

— Fica aqui, pois o Senhor me enviou até Betel.

Mas Eliseu foi firme:

— Juro que não te deixarei! — respondeu ele com determinação.

E assim caminharam juntos até Betel, depois até Jericó, e finalmente até o Rio Jordão. Em cada cidade que paravam, os outros profetas se aproximavam de Eliseu e diziam em voz baixa:

— Você sabe que o Senhor vai levar seu mestre hoje?

— Eu sei — respondia Eliseu, com os olhos marejados. — Não falem sobre isso.

Chegando ao Jordão, Elias tirou seu manto — aquela capa especial que era símbolo de seu ministério — enrolou-o e bateu nas águas. As águas se abriram dos dois lados, e os dois atravessaram em terra seca, como na história do povo de Israel atravessando o Mar Vermelho.`,
      },
      {
        imageUrl: "/images/historias/elias-e-o-carro-de-fogo-cena-3.svg",
        title: "O Pedido de Eliseu",
        text: `Do outro lado do rio, os dois caminhavam lado a lado em silêncio. O sol brilhava forte, e havia uma atmosfera de algo grandioso prestes a acontecer.

Elias virou-se para Eliseu com um olhar cheio de carinho.

— Peça o que quiser antes de eu ser levado — disse ele. — Farei o que me pedir.

Eliseu sabia exatamente o que queria. Ele havia pensado nisso muitas vezes, observando o poder de Deus agindo através de Elias.

— Deixa que em mim haja o dobro do teu espírito — pediu Eliseu.

Era um pedido grande — muito grande. Não era uma pedido de riqueza ou de fama, mas de poder para servir a Deus com toda a força. Elias ficou admirado com a grandeza daquele coração.

— É um pedido difícil — disse Elias com seriedade. — Mas se você me ver quando eu for levado, será assim para você. Se não me ver, não será.

Eliseu não tirou os olhos de Elias nem por um segundo. Eles continuaram caminhando juntos, ombro a ombro, quando de repente o céu começou a mudar.`,
      },
      {
        imageUrl: "/images/historias/elias-e-o-carro-de-fogo-cena-4.svg",
        title: "O Carro de Fogo Desce do Céu",
        text: `De repente, enquanto eles ainda caminhavam e conversavam, aconteceu o mais extraordinário espetáculo que qualquer olho humano já havia visto!

Um carro de fogo desceu do céu, puxado por cavalos de fogo — labaredas vivas em forma de animais majestosos, reluzentes e flamejantes! O calor e a luz eram intensos, e o vento que o carro criava era como uma tempestade.

O carro de fogo passou entre os dois, separando-os!

E então Elias começou a subir — subindo, subindo, subindo — dentro de um redemoinho de vento e fogo, em direção ao céu. Cada vez mais alto, até que só era um ponto brilhante no azul do firmamento. E então desapareceu.

Eliseu olhou para o céu com lágrimas escorrendo pelo rosto. Ele havia visto tudo. Cada detalhe. Cada chama, cada rajada de vento.

— Meu pai! Meu pai! — gritou ele, chorando. — Os carros de Israel e sua cavalaria!

Ele havia perdido o maior mestre que conhecera. Mas com o coração cheio de dor e de admiração, pegou seus próprios mantos e os rasgou — era o sinal de que algo havia terminado e algo novo estava começando.`,
      },
      {
        imageUrl: "/images/historias/elias-e-o-carro-de-fogo-cena-5.svg",
        title: "O Manto e o Novo Profeta",
        text: `Com olhos ainda molhados de lágrimas, Eliseu olhou para o chão. Lá estava o manto de Elias — aquela capa especial havia caído quando o profeta subiu.

Eliseu a apanhou com as mãos trêmulas. Era como segurar um pedaço da história. Um presente do mestre para o discípulo.

Ele caminhou de volta até o Rio Jordão. Com fé e coragem, enrollou o manto e bateu nas águas, assim como Elias havia feito.

— Onde está o Senhor, o Deus de Elias? — gritou ele.

E as águas se abriram! Exatamente como antes!

Eliseu atravessou em terra seca. Os outros profetas que observavam da outra margem viram tudo e exclamaram:

— O espírito de Elias repousa sobre Eliseu!

E assim começou um novo capítulo na história de Israel. O discípulo tornou-se mestre. O aprendiz tornou-se profeta. O manto havia passado de um para o outro.

A história de Elias nos lembra que Deus honra aqueles que o seguem fielmente. E que quando chegamos ao fim de uma fase, Ele sempre tem algo novo e maravilhoso preparado para o próximo capítulo.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/os-reis-magos.svg",
    slug: "os-reis-magos",
    title: "Os Reis Magos",
    subtitle: "A longa viagem para encontrar o Rei dos Reis",
    description:
      "Quando Jesus nasceu, uma estrela brilhante apareceu no céu do Oriente. Três sábios viram a estrela e partiram em uma longa viagem para encontrar o Rei especial que ela anunciava. Descubra o que eles encontraram!",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "⭐",
    gradient: "from-indigo-600 via-purple-500 to-blue-400",
    bgColor: "bg-indigo-50",
    accentColor: "text-indigo-700",
    bibleReference: "Mateus 2:1–12",
    testament: "novo",
    moralLesson:
      "Jesus é tão importante que vale a pena qualquer viagem para encontrá-Lo. Os melhores presentes que podemos dar a Ele são nosso coração e nosso amor.",
    scenes: [
      {
        imageUrl: "/images/historias/os-reis-magos-cena-1.svg",
        title: "A Estrela do Oriente",
        text: `Muito longe de Belém, no grande e misterioso Oriente, viviam homens muito sábios chamados magos. Eles estudavam o céu todas as noites, mapeando as estrelas, observando os planetas, procurando sinais no firmamento.

Numa noite especial, enquanto estudavam o céu, viram algo que nunca haviam visto antes: uma estrela nova, extraordinariamente brilhante, que brilhava com uma intensidade diferente de qualquer outra no firmamento.

Aqueles homens sábios sabiam que o aparecimento de uma estrela assim não era comum. Eles conheciam as antigas profecias que falavam de um Rei especial que nasceria e cujo nascimento seria anunciado por uma estrela.

— Nasceu o Rei dos judeus! — disseram uns para os outros com olhos maravilhados.

Eles precisavam ir encontrá-Lo. Não importava a distância, não importava o tempo que levaria. Aquele era um momento único na história do mundo, e eles não poderiam ficar parados.

Assim, os sábios prepararam suas bagagens e seus camelos, reuniram presentes preciosos e partiram em direção à estrela que brilhava no horizonte.`,
      },
      {
        imageUrl: "/images/historias/os-reis-magos-cena-2.svg",
        title: "A Longa Viagem",
        text: `A viagem dos magos foi longa — muito longa. Dias e dias cruzando desertos imensos, com o sol quente durante o dia e o frio cortante à noite. Os camelos balançavam devagar, mas com passo firme.

Mas os magos não desanimavam. A estrela brilhava lá na frente, guiando-os passo a passo. Todas as noites, eles olhavam para cima e a viam — majestosa e radiante, como um farol no oceano escuro do céu.

Eles carregavam consigo presentes muito especiais, escolhidos com muito cuidado para o Rei que iam encontrar:

Ouro, símbolo de realeza, porque aquele menino seria um Rei.

Incenso, um perfume sagrado que subia em fumaça para o céu, símbolo de adoração a Deus.

Mirra, um ungüento precioso, usado em momentos muito especiais.

Cada presente carregava um significado profundo. Os magos não sabiam exatamente o que encontrariam, mas seu coração sabia que se tratava de alguém muito especial — o mais especial de todos.

Finalmente, as muralhas de Jerusalém apareceram no horizonte. Haviam chegado!`,
      },
      {
        imageUrl: "/images/historias/os-reis-magos-cena-3.svg",
        title: "O Encontro com Herodes",
        text: `Em Jerusalém, os magos foram até o palácio do rei Herodes, pois era o lugar natural para buscar informações sobre um rei recém-nascido.

— Onde está o menino que nasceu Rei dos judeus? — perguntaram eles com alegria. — Vimos Sua estrela no Oriente e viemos adorá-Lo!

Quando Herodes ouviu isso, seu rosto ficou sério. Seu coração foi tomado por um sentimento sombrio: ciúme e medo. Um novo rei? Isso o incomodou muito.

Herodes chamou os sacerdotes e escribas — pessoas que conheciam bem as escrituras — e perguntou onde o Cristo deveria nascer. Eles responderam sem hesitar:

— Em Belém da Judeia, pois assim está escrito pelo profeta.

Herodes chamou os magos em particular e fingiu ser amigável.

— Vão a Belém e procurem cuidadosamente o menino — disse ele com um sorriso falso. — Quando o encontrarem, me avisem para que eu também possa ir adorá-Lo.

Os magos não sabiam que Herodes mentia. Com o coração cheio de esperança, partiram em direção a Belém.`,
      },
      {
        imageUrl: "/images/historias/os-reis-magos-cena-4.svg",
        title: "Diante do Menino Jesus",
        text: `Mal saíram de Jerusalém, a estrela voltou a aparecer diante deles, guiando seus passos. E quando a estrela parou, eles sentiram no coração uma alegria que não cabiam no peito!

Era ali. A estrela havia parado exatamente sobre aquele lugar.

Os magos desceram de seus camelos com cuidado, carregando seus presentes preciosos. Entraram na casa e lá estava a cena mais linda que seus olhos já haviam visto: Maria, a mãe, sentada com ternura, e no colo dela um menino pequeno — Jesus.

Aqueles homens sábios, que haviam percorrido centenas e centenas de quilômetros, fizeram algo que poucos poderiam imaginar: prostraram-se no chão diante daquele bebê e o adoraram.

Então abriram suas caixas e ofereceram seus tesouros: o ouro reluzente, o incenso perfumado, a mirra preciosa. Tudo o que haviam trazido com tanto cuidado durante a longa viagem.

Maria sorria com lágrimas nos olhos, segurando o pequeno Jesus. E os magos saíram de lá diferentes — mais leves, mais cheios, mais alegres do que quando chegaram.`,
      },
      {
        imageUrl: "/images/historias/os-reis-magos-cena-5.svg",
        title: "O Retorno por Outro Caminho",
        text: `Naquela noite, depois de adorar Jesus, os magos adormeceram. E enquanto dormiam, Deus falou com eles em sonho: não voltassem por Herodes, pois aquele rei não queria adorar Jesus — queria machucá-Lo.

Os magos acordaram e, sem hesitar, escolheram um caminho diferente para voltar para seu país. Eles obedeceram a Deus, mesmo que isso tornasse a viagem mais longa.

Muito tempo depois, quando os magos chegaram em casa, eles tinham histórias incríveis para contar. Sobre uma estrela que os guiou através do deserto. Sobre um palácio e um rei que fingia gentileza. Sobre uma casa simples onde encontraram o Rei mais poderoso do universo, pequenino nos braços de sua mãe.

A história dos Reis Magos nos ensina que vale a pena buscar Jesus, não importa quão longa seja a viagem. Eles deixaram o conforto de suas casas, cruzaram desertos, e deram seus melhores presentes — tudo por causa d'Ele.

E a boa notícia é que você não precisa cruzar nenhum deserto para encontrar Jesus. Ele está mais perto do que você imagina — bem dentro do seu coração, esperando com amor.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/jesus-e-as-criancas.svg",
    slug: "jesus-e-as-criancas",
    title: "Jesus e as Crianças",
    subtitle: "As crianças são especiais para Jesus",
    description:
      "Certo dia, muitas famílias trouxeram seus filhos para perto de Jesus. Os discípulos tentaram afastá-los, mas Jesus fez algo que surpreendeu a todos. Descubra o quanto Jesus ama as crianças!",
    readingTime: "7 min",
    ageRange: "3–8 anos",
    emoji: "🤗",
    gradient: "from-sky-400 via-blue-300 to-cyan-300",
    bgColor: "bg-sky-50",
    accentColor: "text-sky-700",
    bibleReference: "Marcos 10:13–16",
    testament: "novo",
    moralLesson:
      "Jesus ama cada criança com um amor imenso e especial. Ninguém é pequeno demais para ser importante para Ele.",
    scenes: [
      {
        imageUrl: "/images/historias/jesus-e-as-criancas-cena-1.svg",
        title: "Jesus Rodeado de Pessoas",
        text: `Por onde Jesus passava, as pessoas vinham correndo. Doentes que queriam ser curados, curiosos que queriam ouvir suas histórias, pais que tinham perguntas, anciãos que queriam debater.

Jesus sempre tinha tempo para todo mundo. Ele parava, ouvia, respondia com paciência e amor. Suas palavras eram como água fresca para almas com sede.

Naquele dia, Jesus estava ensinando em meio a uma multidão. Havia homens com turbantes brancos e mulheres com véus coloridos. Havia mercadores e pescadores, crianças que corriam entre as pernas dos adultos, e anciãos que ouviam com atenção apoiados em seus cajados.

Os discípulos de Jesus — aqueles doze homens que andavam com Ele — faziam o possível para organizar tudo. Às vezes era difícil, pois a multidão era grande e Jesus ficava muito cansado.

Mas aquele dia estava prestes a trazer uma surpresa que os discípulos jamais esqueceriam — uma lição sobre o que realmente importa para o coração de Deus.`,
      },
      {
        imageUrl: "/images/historias/jesus-e-as-criancas-cena-2.svg",
        title: "As Famílias se Aproximam",
        text: `Entre a multidão havia muitas famílias — mães com bebês nos braços, pais com crianças pequenas nos ombros, avós segurando a mão de netinhos curiosos.

Elas haviam ouvido falar de Jesus. Sabiam que Ele era especial, que Suas mãos haviam curado doentes e que Suas palavras mudavam vidas. E tinham um desejo simples e lindo no coração: queriam que Jesus tocasse em seus filhos e os abençoasse.

— Jesus está aqui! — dizia uma mãe para sua filhinha, apontando na direção do Mestre.

— Vou ver Jesus! — ria um menino de cabelos cacheados, tentando escapar da mão do pai para correr na frente.

Bebês curiosos esticavam os braços na direção do homem que todos rodeavam. Crianças menores se espremiam entre as pernas dos adultos tentando ver melhor.

As famílias foram se aproximando com esperança e ternura, carregando seus pequenos tesouros nos braços. Era uma cena linda — cheia de amor de pais que queriam o melhor para seus filhos.`,
      },
      {
        imageUrl: "/images/historias/jesus-e-as-criancas-cena-3.svg",
        title: "Os Discípulos Tentam Afastar as Crianças",
        text: `Quando os discípulos viram todas aquelas famílias com crianças se aproximando de Jesus, eles ficaram preocupados.

— Jesus está cansado — pensaram. — Ele tem coisas importantes para fazer. Assuntos sérios de adultos. Não tem tempo para crianças agora!

Com expressões sérias, eles começaram a bloquear a passagem das famílias.

— Não, não! Vão embora! — disseram alguns discípulos, gesticulando com as mãos. — Jesus está ocupado. As crianças podem voltar outro dia.

As mães trocaram olhares decepcionados. Algumas crianças ficaram com o lábio tremendo, sem entender por que não podiam ver aquele homem de quem tanto tinham ouvido falar.

Um menininho que já estava quase chegando até Jesus foi gentilmente empurrado para trás por um dos discípulos. Os olhinhos dele encheram de lágrimas.

Os discípulos achavam que estavam fazendo a coisa certa. Mas estavam muito, muito enganados. E Jesus estava olhando para tudo aquilo — e não gostou nada do que viu.`,
      },
      {
        imageUrl: "/images/historias/jesus-e-as-criancas-cena-4.svg",
        title: "Jesus Fica Indignado",
        text: `Jesus viu o que seus discípulos estavam fazendo. Viu as crianças sendo afastadas. Viu as mães decepcionadas. Viu o menininho com os olhos cheios de lágrimas.

E Jesus ficou indignado.

Esse é um dos raros momentos em que a Bíblia nos diz que Jesus ficou com indignação — um sentimento forte de que algo injusto estava acontecendo. Ele se virou para seus discípulos com uma expressão séria.

— Deixem as crianças virem a Mim! Não as impeçam! — disse Jesus com firmeza. — Porque o Reino de Deus pertence a elas!

Os discípulos baixaram a cabeça envergonhados. Eles tinham errado feio.

— Em verdade vos digo — continuou Jesus, olhando para todos ao redor — que qualquer um que não receber o Reino de Deus como uma criança não entrará nele.

Então Jesus abriu os braços, e as crianças correram para perto d'Ele! Bebês foram colocados em seus braços. Crianças se agarraram às suas pernas. E Jesus, com um sorriso enorme no rosto, abraçou cada uma, colocou as mãos sobre suas cabecinhas e as abençoou.`,
      },
      {
        imageUrl: "/images/historias/jesus-e-as-criancas-cena-5.svg",
        title: "O Reino é das Crianças",
        text: `Aqueles momentos foram especiais para cada criança que Jesus tocou naquele dia. Elas não sabiam ao certo o que aquela bênção significava, mas sentiam que algo gostoso e quente havia entrado em seus corações.

Os pais olhavam com lágrimas de emoção. Os discípulos entenderam que haviam aprendido uma lição importante: para Jesus, não existe ninguém menos importante. Uma criança vale tanto quanto um rei.

Jesus nos ensinou que o jeito de uma criança receber as coisas — com confiança, sem complicar demais, com o coração aberto — é exatamente o jeito certo de se aproximar de Deus.

Crianças não chegam com orgulho, não chegam querendo provar que são boas ou inteligentes. Elas chegam de mãos abertas, com um sorriso, prontas para receber. E é assim que Jesus quer que todos cheguemos a Ele.

Você é especial para Jesus. Não importa sua idade, não importa se você ainda não consegue ler ou escrever, não importa se às vezes você erra. Jesus abre os braços para você do mesmo jeito que abriu naquele dia — com amor imenso, com alegria no coração, com as mãos prontas para te abraçar.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/a-ressurreicao-de-lazaro.svg",
    slug: "a-ressurreicao-de-lazaro",
    title: "A Ressurreição de Lázaro",
    subtitle: "Quando Jesus chorou — e então fez um milagre",
    description:
      "Lázaro era amigo querido de Jesus. Quando ele ficou muito doente e morreu, suas irmãs ficaram de coração partido. Mas Jesus foi até lá e fez o maior milagre que todos já viram. Descubra essa história emocionante!",
    readingTime: "9 min",
    ageRange: "4–8 anos",
    emoji: "✨",
    gradient: "from-violet-600 via-purple-500 to-indigo-400",
    bgColor: "bg-violet-50",
    accentColor: "text-violet-700",
    bibleReference: "João 11:1–44",
    testament: "novo",
    moralLesson:
      "Jesus está com a gente nos momentos mais difíceis. Mesmo quando tudo parece sem esperança, Deus pode fazer algo incrível.",
    scenes: [
      {
        imageUrl: "/images/historias/a-ressurreicao-de-lazaro-cena-1.svg",
        title: "Os Amigos de Jesus em Betânia",
        text: `Em uma cidade chamada Betânia vivia uma família muito especial: duas irmãs, Maria e Marta, e seu irmão Lázaro. Os três eram amigos queridos de Jesus.

Sempre que Jesus passava por Betânia, ele ia até a casa deles. Marta cozinhava com capricho, enchendo a casa com cheiros deliciosos. Maria sentava aos pés de Jesus e ouvia cada palavra que Ele dizia com atenção total. E Lázaro ria, conversava e ficava ao lado de Jesus como um amigo verdadeiro.

Jesus amava os três de um jeito muito especial. Aquela casa era como um lar para Ele, um lugar onde podia descansar e ser ele mesmo, cercado de pessoas que o amavam sinceramente.

Mas um dia chegou uma notícia terrível: Lázaro havia adoecido. Não era uma doença simples — era algo sério, que o deixou de cama, fraco e sofrendo.

Maria e Marta mandaram um mensageiro urgente para encontrar Jesus, onde quer que Ele estivesse:

— Senhor, aquele que Tu amas está doente!

E então esperaram. Esperaram com o coração partido, rezando para que Jesus chegasse logo.`,
      },
      {
        imageUrl: "/images/historias/a-ressurreicao-de-lazaro-cena-2.svg",
        title: "A Espera Dolorosa",
        text: `Quando Jesus recebeu a mensagem sobre Lázaro, disse algo que pareceu estranho para seus discípulos:

— Esta doença não é para a morte, mas para a glória de Deus.

E Jesus ficou onde estava por mais dois dias. Os discípulos não entendiam por quê.

Enquanto isso, em Betânia, Lázaro piorou. Sua respiração ficou mais fraca, sua pele ficou fria. E então, tristemente, ele morreu.

Marta e Maria choravam abraçadas. Amigos e vizinhos encheram a casa para confortá-las, mas a dor era enorme. Elas haviam mandado avisar Jesus, e Jesus não tinha chegado a tempo.

Será que Ele não se importava? Será que não tinha recebido a mensagem?

Quatro dias se passaram desde a morte de Lázaro, e Jesus ainda não havia chegado. Lázaro já havia sido enterrado em uma tumba na rocha.

Marta e Maria estavam de coração partido. Mas dentro delas ainda havia uma faíscazinha de fé — uma esperança que não conseguiam apagar, mesmo com toda a tristeza.`,
      },
      {
        imageUrl: "/images/historias/a-ressurreicao-de-lazaro-cena-3.svg",
        title: "Jesus Chega a Betânia",
        text: `Quando a notícia de que Jesus estava chegando chegou à casa, Marta foi correndo ao Seu encontro. Maria ficou sentada, ainda chorando.

Marta encontrou Jesus no caminho e disse, com a voz embargada:

— Senhor, se estivesses aqui, meu irmão não teria morrido. Mas mesmo agora, eu sei que Deus te dará tudo o que pedires!

Jesus olhou para ela com olhos cheios de amor e disse algo que ela nunca esqueceria:

— Teu irmão ressuscitará. Eu sou a ressurreição e a vida. Quem crê em Mim, ainda que morra, viverá!

— Creio, Senhor — respondeu Marta com lágrimas nos olhos. — Creio que Tu és o Cristo, o Filho de Deus!

Então Maria também veio correndo e se jogou aos pés de Jesus, chorando. Os amigos que a acompanhavam também choravam. E então aconteceu algo que ninguém esperava de um homem tão poderoso:

Jesus também chorou.

Ele sentiu a dor deles. Ele se importava. E suas lágrimas mostraram que Deus nunca fica indiferente à nossa tristeza.`,
      },
      {
        imageUrl: "/images/historias/a-ressurreicao-de-lazaro-cena-4.svg",
        title: "Lázaro, Sai!",
        text: `Jesus pediu para ser levado até o lugar onde Lázaro havia sido sepultado. Era uma tumba escavada na rocha, com uma pedra enorme cobrindo a entrada.

— Tirem a pedra — disse Jesus.

— Senhor — disse Marta preocupada —, já faz quatro dias. Já tem mau cheiro...

— Não te disse que, se creres, verás a glória de Deus? — respondeu Jesus com calma e firmeza.

A pedra foi removida. Jesus olhou para cima e orou:

— Pai, agradeço que me ouviste. Eu sei que sempre me ouves, mas disse isso por causa do povo que está aqui, para que creiam que Tu me enviaste.

Então, Jesus se virou para a tumba e gritou com uma voz forte e cheia de autoridade:

— Lázaro, vem para fora!

Um silêncio absoluto caiu sobre todos. Ninguém respirava. Ninguém se movia.

E então, do escuro daquela tumba, veio um movimento. Uma figura envolta em faixas de linho começou a aparecer na entrada. Era Lázaro — vivo! Andando!

A multidão explodiu em gritos de alegria, espanto e adoração!`,
      },
      {
        imageUrl: "/images/historias/a-ressurreicao-de-lazaro-cena-5.svg",
        title: "A Alegria que Não Tem Fim",
        text: `— Desatai-o e deixai-o ir! — ordenou Jesus.

As faixas foram retiradas e lá estava Lázaro, de pé, com os olhos abertos, olhando ao redor com uma expressão de quem havia voltado de muito longe. Maria e Marta se jogaram em seus braços chorando — mas agora eram lágrimas de alegria!

Lázaro estava vivo. Estava aquecido, respirando, sorrindo. Era o mesmo Lázaro de sempre — o mesmo sorriso, o mesmo brilho nos olhos.

Todos que estavam ali haviam visto o mais extraordinário milagre de suas vidas. E muitos, naquele dia, passaram a crer em Jesus.

A história de Lázaro nos ensina coisas muito preciosas. Nos ensina que Jesus se importa com a nossa dor — que Ele chora com quem chora. Nos ensina que Ele tem poder sobre todas as coisas, até mesmo sobre a morte. E nos ensina que, quando tudo parece sem esperança, Deus pode surpreender de maneiras que nossa imaginação não alcança.

Quando você estiver com medo, ou triste, ou sentindo que está no escuro como numa tumba, lembre-se da voz de Jesus chamando Lázaro. Esse mesmo Jesus pode te chamar pelo nome — e tudo pode mudar.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/pedro-anda-sobre-as-aguas.svg",
    slug: "pedro-anda-sobre-as-aguas",
    title: "Pedro Anda Sobre as Águas",
    subtitle: "A fé que move os pés — e o mar",
    description:
      "Em uma noite de tempestade, os discípulos viram Jesus andando sobre o mar! Pedro, cheio de coragem, pediu para sair do barco e caminhar até Ele. O que aconteceu em seguida é uma lição que nunca esquecemos!",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "🌊",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    bgColor: "bg-blue-50",
    accentColor: "text-blue-700",
    bibleReference: "Mateus 14:22–33",
    testament: "novo",
    moralLesson:
      "Quando mantemos os olhos em Jesus, conseguimos fazer coisas impossíveis. Mas se olharmos para os problemas com medo, precisamos lembrar de pedir ajuda a Ele.",
    scenes: [
      {
        imageUrl: "/images/historias/pedro-anda-sobre-as-aguas-cena-1.svg",
        title: "Uma Noite no Mar",
        text: `Tinha sido um dia longo e cheio. Jesus havia alimentado mais de cinco mil pessoas com apenas cinco pães e dois peixinhos — um milagre incrível que deixou todos boquiabertos. As sobras encheram doze cestos!

Depois daquele dia extraordinário, Jesus pediu que seus discípulos entrassem no barco e fossem para o outro lado do lago enquanto Ele dispensava a multidão. Os discípulos obedeceram e partiram.

Jesus subiu sozinho numa colina para orar. Era o tipo de coisa que Ele fazia frequentemente — buscava momentos de silêncio para conversar com Seu Pai no céu.

A noite chegou. As estrelas piscaram no céu escuro. No barco, os discípulos remavam em direção à outra margem. Havia Pedro, André, Tiago, João e os outros — pescadores experientes que conheciam bem o mar.

Mas as águas que antes estavam calmas começaram a mudar. O vento aumentou. As ondas ficaram maiores. O barco balançava cada vez mais forte. Era uma tempestade que crescia a cada momento, e os discípulos lutavam com os remos com toda a força.`,
      },
      {
        imageUrl: "/images/historias/pedro-anda-sobre-as-aguas-cena-2.svg",
        title: "Uma Figura nas Águas",
        text: `Era de madrugada — a hora mais escura da noite — quando algo extraordinário aconteceu.

Os discípulos estavam cansados de remar contra o vento. As ondas batiam forte contra o casco do barco, que gemia e rangia. Alguns seguravam os lados brancos de medo.

De repente, alguém gritou:

— O que é aquilo?!

Todos olharam para onde o dedo apontava. No meio do mar revolto, através do spray das ondas e da escuridão, havia uma figura — alguém caminhando sobre a água em direção ao barco!

O medo tomou conta de todos. Seus corações dispararam.

— É um fantasma! — gritaram uns para os outros, apavorados.

As ondas rugiam, o vento uivava, e aquela figura se aproximava cada vez mais. As mãos tremiam nos remos. Alguns discípulos se abraçaram de pavor.

Então a figura abriu a boca, e uma voz conhecida cortou o barulho da tempestade:

— Coragem! Sou Eu! Não tenham medo!

Era Jesus! Andando sobre as águas como se fossem um chão sólido!`,
      },
      {
        imageUrl: "/images/historias/pedro-anda-sobre-as-aguas-cena-3.svg",
        title: "Pedro Sai do Barco",
        text: `Quando os discípulos reconheceram a voz de Jesus, a tensão diminuiu um pouco. Mas Pedro — aquele pescador grandão, impulsivo e cheio de entusiasmo — tinha algo fervilhando dentro do peito.

— Senhor, se és Tu — gritou Pedro por cima do barulho do vento —, manda que eu vá ter Contigo, andando sobre as águas!

Havia um silêncio breve. E então Jesus respondeu com uma só palavra:

— Vem!

Pedro olhou para as ondas escuras que balanavam abaixo dele. Olhou para Jesus, lá na frente, de pé sobre a água como se fosse o coisa mais natural do mundo. Respirou fundo.

E colocou os pés fora do barco.

Seus pés tocaram a água — e ela sustentou seu peso! Pedro começou a andar sobre o mar em direção a Jesus! Passo um, passo dois, passo três... Era um milagre! Pedro estava andando sobre as águas!

Os outros discípulos assistiam com a boca aberta, esquecendo por um momento a tempestade ao redor. Seria que estavam sonhando?

Não estavam. Pedro estava andando sobre o mar.`,
      },
      {
        imageUrl: "/images/historias/pedro-anda-sobre-as-aguas-cena-4.svg",
        title: "O Medo que Afunda",
        text: `Pedro caminhava em direção a Jesus, os pés sobre as ondas, o coração acelerado de emoção.

Mas então ele cometeu um erro: tirou os olhos de Jesus.

Uma rajada de vento forte bateu em seu rosto. As ondas ao seu redor cresceram. E Pedro olhou para o mar revoltoso, para as águas escuras e profundas sob seus pés — e o medo tomou conta dele.

"O que estou fazendo aqui? Isso é impossível! Eu vou afundar!"

E foi exatamente o que aconteceu. Pedro começou a afundar! As águas que o sustentavam agora o puxavam para baixo. Com o coração na garganta, ele gritou:

— Senhor, salva-me!

Em um instante, Jesus estendeu a mão e segurou Pedro com firmeza, impedindo que ele afundasse.

— Homem de pequena fé — disse Jesus com suavidade, mas com seriedade —, por que duvidaste?

Pedro segurou a mão de Jesus com toda a força. Ainda com o coração batendo rápido, os dois caminharam juntos de volta ao barco. Quando subiram, o vento parou imediatamente, e o mar ficou calmo como um espelho.`,
      },
      {
        imageUrl: "/images/historias/pedro-anda-sobre-as-aguas-cena-5.svg",
        title: "A Adoração no Barco",
        text: `Quando Jesus e Pedro entraram no barco, um silêncio de admiração tomou conta de todos.

Os discípulos olhavam para Jesus. Olhavam para Pedro ainda gotejando. Olhavam para o mar agora em paz total. E não conseguiam mais ficar em pé.

Um por um, se ajoelharam no barco — pescadores endurecidos, homens que raramente demonstravam emoção — com os olhos marejados e o coração transbordando.

— Verdadeiramente Tu és o Filho de Deus! — disseram juntos.

Era a primeira vez que os discípulos declaravam isso assim, de forma tão clara e unida. Aquela noite de tempestade havia feito algo dentro de cada um deles que nenhum sermão poderia ter feito: havia mostrado na prática quem Jesus realmente era.

A história de Pedro nas águas é uma das favoritas das crianças — e dos adultos! — porque todos nós já nos sentimos como Pedro às vezes. Começamos cheios de coragem, mas quando os problemas ficam grandes demais, o medo nos faz afundar.

A boa notícia é que Jesus está sempre lá, com a mão estendida, pronto para nos segurar. Tudo o que precisamos fazer é gritar Seu nome — e Ele nos alcança na hora.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/as-bodas-de-cana.svg",
    slug: "as-bodas-de-cana",
    title: "As Bodas de Caná",
    subtitle: "Quando Jesus fez a água virar vinho",
    description:
      "Jesus foi convidado para uma festa de casamento na cidade de Caná. No meio da festa, aconteceu um problema — mas Jesus fez algo incrível que deixou todos surpresos! Este foi o primeiro milagre de Jesus.",
    readingTime: "7 min",
    ageRange: "3–8 anos",
    emoji: "🍇",
    gradient: "from-amber-500 via-yellow-400 to-lime-400",
    bgColor: "bg-amber-50",
    accentColor: "text-amber-700",
    bibleReference: "João 2:1–11",
    testament: "novo",
    moralLesson:
      "Jesus se importa com os detalhes da nossa vida, até com os menores problemas. Quando confiamos n'Ele, Ele pode transformar situações difíceis em algo muito melhor.",
    scenes: [
      {
        imageUrl: "/images/historias/as-bodas-de-cana-cena-1.svg",
        title: "Uma Festa de Casamento",
        text: `Na cidade de Caná, na Galileia, havia uma grande animação. Um casal estava se casando, e toda a aldeia estava convidada para a festa!

As casas estavam enfeitadas com flores coloridas. As mulheres haviam cozinhado por dias — pães frescos, carnes assadas, frutas e doces de todos os tipos. Jarras enormes de vinho esperavam para ser servidas. Era uma festa que durava vários dias, como era costume naquela época.

Jesus e Sua mãe Maria também foram convidados. Os discípulos de Jesus vieram junto. Todos estavam animados — uma festa de casamento era um dos momentos mais alegres na vida de uma família!

Maria circulava entre os convidados com um sorriso nos lábios, conversando, ajudando como podia. Ela sempre foi uma pessoa atenta aos outros, sempre percebendo quando alguém precisava de algo.

Músicos tocavam e as pessoas dançavam. Crianças corriam rindo entre as mesas. Os noivos brilhavam de felicidade. Era uma das noites mais especiais de suas vidas — e a festa mal havia começado.`,
      },
      {
        imageUrl: "/images/historias/as-bodas-de-cana-cena-2.svg",
        title: "O Problema na Festa",
        text: `No meio da festa, Maria percebeu algo que ninguém mais havia notado ainda. Olhando com atenção para os serventes que circulavam com as bandejas, ela viu que as jarras de vinho estavam ficando vazias.

Isso era um problema sério. Na cultura daquela época, ficar sem vinho no meio de uma festa de casamento era uma vergonha enorme para a família. As pessoas falariam mal por muito tempo. Os noivos ficariam envergonhados no dia mais importante de suas vidas.

Maria foi até Jesus e disse baixinho, com calma:

— Eles estão sem vinho.

Jesus respondeu de um jeito que soou estranho:

— Mulher, que tem isso a ver Comigo? Minha hora ainda não chegou.

Mas Maria conhecia Seu filho. Ela sabia que Ele podia ajudar. Com um pequeno sorriso, ela virou para os serventes e disse, com muita certeza no coração:

— Façam tudo o que Ele disser.

Ela não sabia exatamente o que Jesus faria. Mas confiava completamente n'Ele. E essa confiança silenciosa abriu o caminho para o primeiro milagre de Jesus.`,
      },
      {
        imageUrl: "/images/historias/as-bodas-de-cana-cena-3.svg",
        title: "As Seis Jarras de Pedra",
        text: `Jesus olhou ao redor e viu seis grandes jarras de pedra encostadas na parede. Eram jarras enormes — cada uma cabia de cem a cento e cinquenta litros de água! Eram usadas para a purificação ritual dos judeus.

Ele chamou os serventes e disse:

— Encham as jarras de água.

Os serventes se olharam. Água? Mas o problema era a falta de vinho, não de água! Mesmo assim, lembraram das palavras de Maria: "Façam tudo o que Ele disser."

Então foram enchendo as jarras — um balde após outro, subindo e descendo as escadas até o poço, derramando a água fresca dentro das jarras de pedra. Trabalharam até que as seis jarras estavam completamente cheias, até a borda.

Quando terminaram, Jesus disse:

— Agora tirem um pouco e levem ao mestre-sala.

O mestre-sala era o responsável pela festa — o que ficava cuidando de tudo para que os convidados fossem bem atendidos. Os serventes obedeceram, tiraram um pouco do líquido das jarras e levaram.

O que eles carregaram nos copos não era mais água.`,
      },
      {
        imageUrl: "/images/historias/as-bodas-de-cana-cena-4.svg",
        title: "A Surpresa do Mestre-Sala",
        text: `O mestre-sala recebeu a taça e bebeu. Seus olhos se arregalaram.

Era vinho! E não era um vinho qualquer — era um vinho extraordinário, o melhor que ele já havia provado em sua vida!

Sem saber de onde havia saído aquele vinho maravilhoso, ele foi até o noivo e disse, com admiração:

— Todo mundo serve o vinho bom primeiro, e depois, quando as pessoas já beberam bastante, serve o de qualidade menor. Mas você guardou o melhor vinho para agora!

O noivo sorriu sem saber exatamente o que havia acontecido. Os serventes sim — eles sabiam. Eles haviam visto a água entrar nas jarras. Eles haviam tirado o vinho de dentro. Eles sabiam que aquilo era impossível — e tinha acontecido!

Com olhos cheios de admiração, eles olharam para Jesus de longe. Quem era esse homem que transformava água em vinho com apenas uma palavra?

Os discípulos de Jesus também haviam visto tudo. E aquele momento fez algo dentro de cada um deles — sua fé cresceu, suas dúvidas diminuíram. Eles viram pela primeira vez a glória de Jesus se revelar.`,
      },
      {
        imageUrl: "/images/historias/as-bodas-de-cana-cena-5.svg",
        title: "O Primeiro Sinal de Jesus",
        text: `A festa continuou com alegria ainda maior. Os convidados bebiam o vinho maravilhoso sem saber do milagre que havia acontecido. A família dos noivos respirou aliviada. A vergonha havia sido evitada.

E Jesus havia feito tudo isso de um jeito discreto — sem fanfarra, sem chamar atenção para Si mesmo. Apenas com amor e poder, de forma silenciosa, transformou um problema em alegria.

A Bíblia chama esse episódio de "o primeiro dos sinais" de Jesus — o primeiro milagre que Ele fez para revelar quem era. E aconteceu numa festa de casamento, num momento aparentemente pequeno, ajudando uma família que estava passando por um problema que parecia sem solução.

Isso nos diz algo muito importante sobre Jesus: Ele se importa com os detalhes da nossa vida. Ele não veio apenas para curar doenças grandes ou ressuscitar mortos. Ele se importa com a sua festa, com a sua preocupação pequena, com o seu dia a dia.

Quando você estiver com um problema — grande ou pequeno — você pode contar para Jesus, assim como Maria contou naquele dia. E assim como os serventes, você pode fazer o que Ele manda, mesmo sem entender o plano.

Porque Jesus sempre transforma as coisas para melhor.`,
      },
    ],
  },
]

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug)
}
