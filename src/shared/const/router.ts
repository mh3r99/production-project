export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articles_details',
    ARTICLE_CREATE = 'article_creat',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: getRouteMain(),
    [AppRoutes.ABOUT]: getRouteAbout(),
    [AppRoutes.PROFILE]: getRouteProfile(':id'),
    [AppRoutes.ARTICLES]: getRouteArticles(),
    [AppRoutes.ARTICLE_DETAILS]: getRouteArticleDetails(':id'),
    [AppRoutes.ARTICLE_CREATE]: getRouteArticleCreate(),
    [AppRoutes.ARTICLE_EDIT]: getRouteArticleEdit(':id'),
    [AppRoutes.ADMIN_PANEL]: getRouteAdmin(),
    [AppRoutes.FORBIDDEN]: getRouteForbidden(),
    [AppRoutes.NOT_FOUND]: '*',
};
