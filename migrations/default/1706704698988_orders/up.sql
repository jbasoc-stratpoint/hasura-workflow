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