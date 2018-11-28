/*
*  删除表
*/


DROP TABLE IF EXISTS public.book_set_items;
DROP TABLE IF EXISTS public.book_set_values;

DROP TABLE IF EXISTS public.book_chapters;
DROP TABLE IF EXISTS public.books;

DROP TABLE IF EXISTS public.client;
DROP TABLE IF EXISTS public.comments;

DROP TABLE IF EXISTS public.rankings_details;
DROP TABLE IF EXISTS public.rankings;

DROP TABLE IF EXISTS public.replys;

DROP TABLE IF EXISTS public.role_sets;
DROP TABLE IF EXISTS public.roles;

DROP TABLE IF EXISTS public.settings;

DROP TABLE IF EXISTS public.templates;
DROP TABLE IF EXISTS public.temp_items;
DROP TABLE IF EXISTS public.book_sets;

DROP TABLE IF EXISTS public.time_point_events;

DROP TABLE IF EXISTS public.user_information;
DROP TABLE IF EXISTS public.users;

DROP TABLE IF EXISTS public.word_similar;
DROP TABLE IF EXISTS public.word_thinks;
DROP TABLE IF EXISTS public.words;

/*  rankings 依赖  */
DROP TABLE IF EXISTS public.architectures;