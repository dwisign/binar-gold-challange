import imgCar from '../../assets/car.png'
import imgOverview from '../../assets/img_service.png'
import iconCheck from '../../assets/icon_check.svg'
import icon1 from '../../assets/icon_1.svg'
import icon2 from '../../assets/icon_2.svg'
import icon3 from '../../assets/icon_3.svg'
import icon4 from '../../assets/icon_4.svg'
import profpic1 from '../../assets/user-pict/women/1.jpg'
import profpic2 from '../../assets/user-pict/men/1.jpg'
import profpic3 from '../../assets/user-pict/women/5.jpg'
import facebook from '../../assets/icon_facebook.svg'
import instagram from '../../assets/icon_instagram.svg'
import emailFooter from '../../assets/icon_mail.svg'
import twitter from '../../assets/icon_twitter.svg'
import twitch from '../../assets/icon_twitch.svg'

const logo = 'Momain'
const lokasi = 'Ciledug'
const address = 'Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000'
const email = 'binarcarrental@gmail.com'
const phone = '081-233-334-808'

const menuList = [
    {
        link: '#1',
        name: 'Our Services'
    },
    {
        link: '#2',
        name: 'Why Us'
    },
    {
        link: '#3',
        name: 'Testimonial'
    },
    {
        link: '#4',
        name: 'FAQ'
    }
]

const serviceList = [
    'Sewa Mobil Dengan Supir di Bali 12 Jam',
    'Sewa Mobil Lepas Kunci di Bali 24 Jam',
    'Sewa Mobil Jangka Panjang Bulanan',
    'Gratis Antar - Jemput Mobil di Bandara',
    'Layanan Airport Transfer / Drop In Out'
]

const whyUs = [
    {
        icon : icon1,
        title : 'Mobil Lengkap',
        desc : 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
    },
    {
        icon : icon2,
        title : 'Harga Murah',
        desc : 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
    },
    {
        icon : icon3,
        title : 'Layanan 24 Jam',
        desc : 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
    },
    {
        icon : icon4,
        title : 'Sopir Profesional',
        desc : 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
    }
]

const testimoniData = [
    {
        profpic : profpic1,
        star : '',
        comment : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
        name : 'John Dee',
        age : 32,
        location : 'Bromo'
    },
    {
        profpic : profpic2,
        star : '',
        comment : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
        name : 'Herman Console log',
        age : 28,
        location : 'Kebumen'
    },
    {
        profpic : profpic3,
        star : '',
        comment : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
        name : 'Jojo Seblew',
        age : 48,
        location : 'Citayam'
    },
    {
        profpic : profpic3,
        star : '',
        comment : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
        name : 'Jojo Seblew',
        age : 48,
        location : 'Citayam'
    },
    {
        profpic : profpic3,
        star : '',
        comment : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
        name : 'Jojo Seblew',
        age : 48,
        location : 'Citayam'
    },
    {
        profpic : profpic3,
        star : '',
        comment : '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
        name : 'Jojo Seblew',
        age : 48,
        location : 'Citayam'
    }
]

const faqData = [
    {   
        idFaq: '1',
        question: 'Apa saja syarat yang dibutuhkan?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    },
    {
        idFaq: '2',
        question: 'Berapa hari minimal sewa mobil lepas kunci?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    },
    {
        idFaq: '3',
        question: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    },
    {
        idFaq: '4',
        question: 'Apakah Ada biaya antar-jemput?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    },
    {
        idFaq: '5',
        question: 'Bagaimana jika terjadi kecelakaan',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    }
]

const socialConnect = [
    {
        link: '#',
        icon: facebook
    },
    {
        link: '#',
        icon: instagram
    },
    {
        link: '#',
        icon: twitter
    },
    {
        link: '#',
        icon: emailFooter
    },
    {
        link: '#',
        icon: twitch
    }
]

export {
    menuList,
    logo,
    lokasi,
    serviceList,
    imgCar,
    imgOverview,
    iconCheck,
    whyUs,
    testimoniData,
    faqData,
    address,
    email,
    phone,
    socialConnect,
}