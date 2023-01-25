import React, {useEffect} from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import FavouritesPanel from "../FavouritesPanel";
import FindPanel from "../FindPanel";
import FavouritesPanelMobile from "../FavouritesPanel/FavPanelMobile";
import Styles from "./styles";


const MainPage = () => {
    const classes = Styles();

    const burgerMenuAdaptive = useMediaQuery(theme => theme.breakpoints.down('md'));

    useEffect(() => {
        function PlayHera(clientId, container) {
            const playheraSsoLoginPage = 'https://develop-web.playhera.com/sso'      //DEV
            const playheraSubscriptionsPage = 'https://develop-web.playhera.com/subscription?view=true'      //DEV
            const playheraBaseURL = 'https://develop-westeurope.playhera.com/api/';     //DEV
            const defaultAvatar = 'https://develop-web.playhera.com/default-user.svg' //STAGE

            const self = this;
            const accessTokenKey = 'access_token';
            const accessTokenExpiryKey = 'access_token_expires';
            const refreshTokenKey = 'refresh_token';
            let pendingRefresh = false;

            const currentUrl = window.location.search;
            const urlParams = new URLSearchParams(currentUrl);
            const refresh = urlParams.get(refreshTokenKey);
            const access = urlParams.get(accessTokenKey);

            (function() {
                createLoginBtn();
                if(refresh && access) startLogin()
            })();

            self.getSubscriptionStatus = async function() {
                let response = await fetch(playheraBaseURL + 'payments/mysubscriptions', {
                    headers: {
                        Authorization: getCookie(accessTokenKey),
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                });
                let result = await response.json();
                return result;
            };

            self.getProfile = async function() {
                let response = await fetch(playheraBaseURL + 'profiles/my', {
                    headers: {
                        Authorization: getCookie(accessTokenKey),
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                });
                let result = await response.json();

                return result;
            };

            function getProfile() {
                return fetch(playheraBaseURL + 'profiles/my', {
                    headers: {
                        Authorization: getCookie(accessTokenKey),
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        const button = document.getElementById('ph-login')
                        button.innerHTML = 'My Subscription';
                        button.onclick = function() { window.location.href = playheraSubscriptionsPage }

                        const avatar = document.createElement('img');
                        avatar.id = 'ph-avatar';
                        avatar.src = data.avatar || defaultAvatar;
                        avatar.style.cssText ='margin:9px;border-radius: 100%;border: 1px solid #FFFFFF;width: 26px;min-width: 26px;height: 26px;background: #727288;object-fit: cover;';
                        document.querySelector(container).appendChild(avatar);

                        const login = document.createElement('p');
                        login.style.cssText ='color: #FFFFFF;font-weight: 600;font-size:1rem;';
                        login.appendChild(document.createTextNode(data.display_name || data.login))
                        document.querySelector(container).appendChild(login);
                    });
            }

            function makeRefreshToken() {
                if (pendingRefresh) return;

                pendingRefresh = true;
                try {
                    let refreshToken = getCookie(refreshTokenKey);
                    fetch(playheraBaseURL + 'auth/refresh', {
                        method: 'POST',
                        headers: { Authorization: 'Bearer ' + refreshToken },
                    })
                        .then(response => response.json())
                        .then(data => {
                            setAuthToCookie(data);
                        });
                } finally {
                    pendingRefresh = false;
                }
            }

            function signInRefreshAuth() {
                if (pendingRefresh) return;

                pendingRefresh = true;
                try {
                    let accessTokenExpiry = getCookie(accessTokenExpiryKey);
                    let refreshToken = getCookie(refreshTokenKey);

                    if (
                        (refreshToken && !accessTokenExpiry) ||
                        accessTokenExpiry * 1000 - new Date().getTime() < 60000
                    ) {
                        makeRefreshToken();
                    }
                } catch (error) {
                    console.error('Service not available');
                    throw error;
                } finally {
                    pendingRefresh = false;
                }
            }

            function startRefreshTokenJob() {
                signInRefreshAuth();
                setInterval(signInRefreshAuth, 20000);
            }

            function createLoginBtn() {
                const wrapper =  document.querySelector(container)
                wrapper.style.width = '100%'
                wrapper.style.display = 'flex'
                wrapper.style.justifyContent = 'center'
                wrapper.style.alignItems = 'center'

                const button = document.createElement('button');
                button.id = 'ph-login';
                button.innerHTML = 'Subscribe and Play';
                button.onclick = checkLoggedState
                button.style.cssText ='cursor:pointer;margin:8px;padding: 10px 20px;border-radius: 200px;border: none;background: #8261fc;min-height: 2rem;min-width: 110px;color: white;font-size: 1rem;font-weight: 600;'
                wrapper.appendChild(button);
            }

            async function startLogin() {
                setCookie(refreshTokenKey, refresh);
                setCookie(accessTokenKey, access);
                window.history.replaceState({}, document.title, "/" );
                await getProfile();
                startRefreshTokenJob();
            }

            function checkLoggedState() {
                if (refresh && access) {
                    startLogin()
                } else window.location.href = playheraSsoLoginPage + `?client=${clientId}`;
            }

            function setAuthToCookie(data) {
                if (data.access_token) {
                    setCookie(
                        'access_token',
                        data.access_token,
                        data.access_token_expires
                    );
                    setCookie(
                        'access_token_expires',
                        data.access_token_expires,
                        data.access_token_expires
                    );
                    setCookie(
                        'refresh_token',
                        data.refresh_token,
                        data.refresh_token_expires
                    );
                    setCookie(
                        'refresh_token_expires',
                        data.refresh_token_expires,
                        data.refresh_token_expires
                    );
                }
            }

            function setCookie(cname, cvalue, expiry) {
                const d = new Date();
                d.setTime(expiry * 1000);
                let expires = 'expires=' + d.toUTCString();
                document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
            }

            function getCookie(cname) {
                let name = cname + '=';
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return '';
            }
        }
        const playhera = new PlayHera(
            'C86D279A-E3AA-4EA0-B539-8E7F24D907DA',
            '#ph-login-container'
        );       
   }, [ ]);
    
    return (
        <>
                <Grid container>
        
                 <div id="ph-login-container"></div>
        
                    <Grid item xs={12} lg={8}>
                        <Box className={classes.pageHeader}>
                            <Typography component="h3" className={classes.pageTitle}>MSI 2020</Typography>
                            {burgerMenuAdaptive && <FavouritesPanelMobile/>}
                        </Box>
                        <FindPanel/>
                    </Grid>
                    {burgerMenuAdaptive ? null : (
                        <Grid item lg={4} className={classes.favPanel}>
                            <FavouritesPanel/>
                        </Grid>
                    )}
                </Grid>
        </>
    );
};

export default MainPage;
