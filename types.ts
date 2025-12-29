
export enum MessageRole {
  USER = 'user',
  BOT = 'bot'
}

export interface Message {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
}

export interface OrderStage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const ORDER_STAGES: OrderStage[] = [
  {
    id: 'received',
    title: 'Order Received',
    description: 'Our system has confirmed your order and sent it to the local fulfillment center.',
    icon: '📄'
  },
  {
    id: 'picking',
    title: 'Shopper Picking',
    description: 'A personal shopper is moving through the aisles selecting your items and handling substitutions.',
    icon: '🛒'
  },
  {
    id: 'packing',
    title: 'Packing & Staging',
    description: 'Your groceries are carefully bagged. Temperature-sensitive items are stored in coolers/freezers.',
    icon: '📦'
  },
  {
    id: 'transit',
    title: 'Out for Delivery',
    description: 'Your driver has loaded the order and is following an optimized route to your door.',
    icon: '🚚'
  },
  {
    id: 'arrived',
    title: 'Delivered',
    description: 'Your order has been dropped off. Check your door or designated drop-off spot!',
    icon: '✨'
  }
];
