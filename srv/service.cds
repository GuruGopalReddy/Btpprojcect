using db as db1 from '../db/schema';

service MyService {

    entity university as projection on db1.university;

}