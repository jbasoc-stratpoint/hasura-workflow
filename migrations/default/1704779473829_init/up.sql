SET check_function_bodies = false;
CREATE TABLE IF NOT EXISTS public.accounts (
    id text NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at bigint,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    oauth_token_secret text,
    oauth_token text,
    "userId" text NOT NULL,
    refresh_token_expires_in integer
);
CREATE TABLE IF NOT EXISTS public.category (
    id integer NOT NULL,
    name text
);
CREATE TABLE IF NOT EXISTS public.orders (
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    user_id text NOT NULL
);
CREATE TABLE IF NOT EXISTS public.products (
    id integer NOT NULL,
    product_name text NOT NULL,
    product_description text
);
CREATE SEQUENCE IF NOT EXISTS public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
CREATE TABLE IF NOT EXISTS public.role (
    id integer NOT NULL,
    role_name text NOT NULL
);
CREATE TABLE IF NOT EXISTS public.sessions (
    id text NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" text NOT NULL,
    expires timestamp with time zone
);
CREATE TABLE IF NOT EXISTS public.users (
    id text NOT NULL,
    name text,
    email text,
    "emailVerified" timestamp with time zone,
    image text,
    role_id integer
);
CREATE TABLE IF NOT EXISTS public.verification_tokens (
    token text NOT NULL,
    identifier text NOT NULL,
    expires timestamp with time zone
);
ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.verification_tokens
    ADD CONSTRAINT verification_tokens_pkey PRIMARY KEY (token);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role(id) ON UPDATE RESTRICT ON DELETE CASCADE;

