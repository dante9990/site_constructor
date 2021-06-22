import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript',{
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock('here we go with some text', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            'font-weight': 'bold',
            padding: '1rem',
        }
    }),
    new ColumnsBlock([
        '11111111',
        '22222222',
        '33333333'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            color: '#fff',
            padding: '2rem',
            'font-weight': 'bold'
        }
    }),
    new ImageBlock( image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
           width: '500px',
           heignt: 'auto'
        },
        alt: 'Это картинка'
    })
]