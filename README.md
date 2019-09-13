# Golden Bucket List

## clientside (frontend)

### Dependencies

- axios
- react-router-dom
- redux
- react-redux
- node-sass
- http-proxy-middle

### routes

- Home => '/' => AuthComponent.js
- San Diego => '/san_diego' =>
- Los Angeles => '/los_angeles' => LosAngeles.js
- Phoenix => '/phoenix' => Phoenix.js
- Las Vegas => '/las_vegas' => LasVegas.js
- profile => '/golden_profile' => Profile.js

### file-structure

- src/
  -components/ - AuthComponents.js - Store.js - Profile.js
  - app.js
  - index.js
  - reset.js
  - setupProxy.js
  - dux/
    - store.js
    - reducer.js

## serverside (backend)

### dependecies

    - express
    - express-session
    - dotenv
    - massive
    - bcrypt

### server file structure

- server/
  - index.js
  - controller/
    - cakeAndBurritoController.js
    - authController.js
  - middleWare/
    - middelware.js => session check

### endpoints

- login => /api/spicy_burrito_purchase
- register: => /api/register_burrito
- logout: => /api/burrito_eaten
- userSession => /api/burrito_info

### cake_burrito endpoints

- get => /api/get_my_spicy_burritos
- get => /api/get_my_spicy_burrito/:id
- post => /api/never_gonna_give_you-up
- put => /api/burrito_central
- delete => /api/no_burrito

## secrets

```
CONNECTION_STRING=
SESSION_SERCET=
SERVER_PORT=

```

## Database

- user_info

```sql
create table user_info(
    id serial primary key,
    email text not null unique,
    password text not null,
    user_name text
)
```

- product_inventory

```sql
create table product_inventory(
    id serial primary key,
    product text not pull,
    price integer not null,
    description text not null,
    image text not null,

)
```
