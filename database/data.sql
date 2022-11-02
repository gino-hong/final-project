insert into "users" (
  "username",
  "hashedPassword"
) values (
  'beast',
  '$argon2id$v=19$m=4096,t=3,p=1$oEihHa3oxxFXfvxXX/Odlw$H5vJ6OwhccW4UQ7qdinCcqSFBcgXekojE/vCLPd8RjA'
);

insert into "entries" (
  "day",
  "category",
  "title",
  "userId"
) values (
  'Sunday',
  'Anime',
  'A1',
  1
), (
  'Monday',
  'Manga',
  'M1',
  1
);
