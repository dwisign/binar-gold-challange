import imgCar from '../../assets/car.png'
import imgOverview from '../../assets/img_service.png'
import icon1 from '../../assets/icon_1.png'
import icon2 from '../../assets/icon_2.png'
import icon3 from '../../assets/icon_3.png'
import icon4 from '../../assets/icon_4.png'
import profpic1 from '../../assets/user-pict/women/1.jpg'
import profpic2 from '../../assets/user-pict/men/1.jpg'
import profpic3 from '../../assets/user-pict/women/5.jpg'

const menuList = ['Our Services', 'Why Us', 'Testimonial', 'FAQ']
const logo = 'Momain'
const lokasi = 'Ciledug'
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
        question: 'Apa saja syarat yang dibutuhkan?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    },
    {
        question: 'Berapa hari minimal sewa mobil lepas kunci?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    },
    {
        question: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    },
    {
        question: 'Apakah Ada biaya antar-jemput?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    },
    {
        question: 'Bagaimana jika terjadi kecelakaan',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    }

]

export {
    menuList,
    logo,
    lokasi,
    serviceList,
    imgCar,
    imgOverview,
    whyUs,
    testimoniData,
    faqData
}