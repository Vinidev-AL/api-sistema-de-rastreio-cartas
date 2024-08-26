import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Volunteer } from '../volunteers/entities/volunteer.entity';
import { Carta } from '../cartas/entities/carta.entity';
import { Suggestion } from '../photos/entities/suggestion.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [User, Volunteer, Carta, Suggestion],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];