import api from './api'
import type { AboutUsObj, DailySpecialsObj, VisitObj } from '@/../interfaces/Common';

export const getAboutUs = async (): Promise<AboutUsObj> => {
  try {

    const data: AboutUsObj = { data: null, error: false };
    const res = await api.get('todos/');
    data.data = {
        title: 'A place where food, design, and ambiance come together to create a memorable experience.',
        icon: 'https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/knife-icon.png',
        data: [
          {
            id: 1,
            slug: 'beverage-menu',
            title: 'Beverage Menu',
            description: 'Our pizza is lovingly handcrafted, stone-baked, and delicious.',
            img: 'https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/cold-espresso-coffee-glass-2022-03-04-06-19-34-utc-714x1024.jpg'
          },
          {
            id: 2,
            slug: 'dining-menu',
            title: 'Dining Menu',
            description: 'Our pizza is lovingly handcrafted, stone-baked, and delicious.',
            img: 'https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/dinning-fish-dish-683x1024.jpg'
          },
          {
            id: 3,
            slug: 'dessert-menu',
            title: 'Dessert Menu',
            description: 'Our pizza is lovingly handcrafted, stone-baked, and delicious.',
            img: 'https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/desert-cake-683x1024.jpg'
          }
        ]
    }
    return data;
    
  } catch (error) {
    console.error('Error fetching:', error);
    return { data: null, error: true };
  }
};

export const getDailySpecials = async (): Promise<DailySpecialsObj> => {
  try {

    const data: DailySpecialsObj = { data: null, error: false };
    const res = await api.get('todos/');

    data.data = {
        top: {
          title: 'Daily Specials',
          bg_img: 'https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/rod-long-kImU-9S9uh8-unsplash.jpg',
          data: [
            { 
              id: 1,
              title: 'BBQ Ribs',
              price: '$26.0',
              description: '1/2 rack of house smoked ribs brushed with zesty BBQ sauce. Served with kaleslaw, french fries, & corn bread muffin served with a side of honey cinnamon butter'
            },
            {
              id: 2,
              title: 'Grilled Salmon',
              price: '$21.0',
              description: 'Eco-friendlygrilledNorwegiansalmon,wildrice, roasted butternut squash & brussel sprouts. Topped with garlic-rosemary lemon butter'
            },
            { 
              id: 3,
              title: 'BBQ Ribs',
              price: '$22.0',
              description: '1/2 rack of house smoked ribs brushed with zesty BBQ sauce. Served with kaleslaw, french fries, & corn bread muffin served with a side of honey cinnamon butter'
            },
            {
              id: 4,
              title: 'Grilled Salmon',
              price: '$19.0',
              description: 'Eco-friendlygrilledNorwegiansalmon,wildrice, roasted butternut squash & brussel sprouts. Topped with garlic-rosemary lemon butter'
            }
          ]
        },
        body: {
          title: 'Events & Functions',
          description: 'Lorem ipsum dolor sit enim ametys consec atetur adipisicing elit  eiusmo tempors incididunts labore dolore magna aliqua enim mini veniam quis nostrud exercitation ullamcos laboris nisiut aliquip consequat reprehenderit.',
          bg_img: 'https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/avocado-toast-with-egg-and-pomegrate-seeds-on-blac-2021-10-15-11-33-16-utc.jpg'
        },
        bottom: {
          title: 'Daily Special Dishes',
          description: 'Lorem ipsum dolor sit enim ametys consec atetur adipisicing elit  eiusmo tempors incididunts labore dolore magna aliqua enim mini veniam quis nostrud exercitation ullamcos laboris nisiut aliquip consequat reprehenderit.Spend more time enjoying yourself and less time stressing about the details with catering from Grand Restaurant. We’ll craft a meal your guests are sure to savor, and we’ll even take care of the dishes.',
          bg_img: 'https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/avocado-toast-with-egg-and-pomegrate-seeds-on-blac-2021-10-15-11-33-16-utc-1.jpg'
        }
    }
    return data;
    
  } catch (error) {
    console.error('Error fetching:', error);
    return { data: null, error: true };
  }
};

export const getVisit = async (): Promise<VisitObj> => {
  try {

    const data: VisitObj = { data: null, error: false };
    const res = await api.get('todos/');
    data.data = {
        title: 'Visit Our Restaurant',
        bg_img: 'https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/business-lunch-man-and-woman-sitting-at-table-at-2021-12-09-04-16-54-utc-1024x683.jpg',
        dinner_txt: ['Thursday to Sunday', 'Reservations from 12pm to 1.30pm'],
        lunch_txt: ['Saturday and Sunday', 'Reservations from 12pm to 1.30pm']
        
    }
    return data;
    
  } catch (error) {
    console.error('Error fetching:', error);
    return { data: null, error: true };
  }
};

