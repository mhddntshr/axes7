setTimeout(function() {
    var _0x3f00x0 = document["getElementById"]('preloader');
    if (_0x3f00x0) {
        _0x3f00x0["classList"]["add"]('preloader-hide')
    }
}, 150);
document["addEventListener"]('DOMContentLoaded', () => {
    'use strict';
    let _0x3f00x1 = true;
    let _0x3f00x2 = true;
    var _0x3f00x3 = "axes";
    var _0x3f00x4 = 1;
    var _0x3f00x5 = false;


    function _0x3f00x8() {
        var _0x3f00x9, _0x3f00xa, _0x3f00xb;
        var _0x3f00xc = document["getElementsByClassName"]('menu-hider');
        if (!_0x3f00xc["length"]) {
            var _0x3f00xd = document["createElement"]('div');
            _0x3f00xd["setAttribute"]("class", "menu-hider");
            document["body"]["insertAdjacentElement"]('beforebegin', _0x3f00xd)
        };
        if (_0x3f00xc[0]["classList"]["contains"]('menu-active')) {
            _0x3f00xc[0]["classList"]["remove"]('menu-active')
        };
        document["querySelectorAll"]('.menu')["forEach"]((_0x3f00xb) => {
            _0x3f00xb["style"]["display"] = 'block'
        });
        var _0x3f00xe = document["querySelectorAll"]('input');
        if (_0x3f00xe["length"]) {
            var _0x3f00xf = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            var _0x3f00x10 = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            var _0x3f00x11 = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
            var _0x3f00x12 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
            var _0x3f00x13 = /^(0|[1-9]\d*)$/;
            var _0x3f00x14 = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
            var _0x3f00x15 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;

            function _0x3f00x16(_0x3f00xb) {
                _0x3f00xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["remove"]('disabled');
                _0x3f00xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["add"]('disabled')
            }

            function _0x3f00x17(_0x3f00xb) {
                _0x3f00xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["add"]('disabled');
                _0x3f00xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["remove"]('disabled')
            }

            function _0x3f00x18(_0x3f00xb) {
                _0x3f00xb["parentElement"]["querySelectorAll"]('em')[0]["classList"]["remove"]('disabled');
                _0x3f00xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["add"]('disabled');
                _0x3f00xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["add"]('disabled')
            }
            var _0x3f00x19 = document["querySelectorAll"]('.input-style input:not([type=\"date\"])');
            _0x3f00x19["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('keyup', (_0x3f00xa) => {
                    if (!_0x3f00xb["value"] == "") {
                        _0x3f00xb["parentElement"]["classList"]["add"]('input-style-active');
                        _0x3f00xb["parentElement"]["querySelector"]('em')["classList"]["add"]('disabled')
                    } else {
                        _0x3f00xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["add"]('disabled');
                        _0x3f00xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["add"]('disabled');
                        _0x3f00xb["parentElement"]["classList"]["remove"]('input-style-active');
                        _0x3f00xb["parentElement"]["querySelector"]('em')["classList"]["remove"]('disabled')
                    }
                })
            });
            var _0x3f00x1a = document["querySelectorAll"]('.input-style textarea');
            _0x3f00x1a["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('keyup', (_0x3f00xa) => {
                    if (!_0x3f00xb["value"] == "") {
                        _0x3f00xb["parentElement"]["classList"]["add"]('input-style-active');
                        _0x3f00xb["parentElement"]["querySelector"]('em')["classList"]["add"]('disabled')
                    } else {
                        _0x3f00xb["parentElement"]["classList"]["remove"]('input-style-active');
                        _0x3f00xb["parentElement"]["querySelector"]('em')["classList"]["remove"]('disabled')
                    }
                })
            });
            var _0x3f00x1b = document["querySelectorAll"]('.input-style select');
            _0x3f00x1b["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('change', (_0x3f00xa) => {
                    if (_0x3f00xb["value"] !== "default") {
                        _0x3f00xb["parentElement"]["classList"]["add"]('input-style-active');
                        _0x3f00xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["remove"]('disabled');
                        _0x3f00xb["parentElement"]["querySelectorAll"]('.invalid, em, span')[0]["classList"]["add"]('disabled')
                    };
                    if (_0x3f00xb["value"] == "default") {
                        _0x3f00xb["parentElement"]["querySelectorAll"]('span, .valid, em')[0]["classList"]["add"]('disabled');
                        _0x3f00xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["remove"]('disabled');
                        _0x3f00xb["parentElement"]["classList"]["add"]('input-style-active')
                    }
                })
            });
            var _0x3f00x1c = document["querySelectorAll"]('.input-style input[type=\"date\"]');
            _0x3f00x1c["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('change', (_0x3f00xa) => {
                    _0x3f00xb["parentElement"]["classList"]["add"]('input-style-active');
                    _0x3f00xb["parentElement"]["querySelectorAll"]('.valid')[0]["classList"]["remove"]('disabled');
                    _0x3f00xb["parentElement"]["querySelectorAll"]('.invalid')[0]["classList"]["add"]('disabled')
                })
            });
            var _0x3f00x1d = document["querySelectorAll"]('.validate-field input, .validator-field textarea');
            if (_0x3f00x1d["length"]) {
                _0x3f00x1d["forEach"]((_0x3f00xb) => {
                    return _0x3f00xb["addEventListener"]('keyup', (_0x3f00xa) => {
                        var _0x3f00x1e = _0x3f00xb["getAttribute"]('type');
                        switch (_0x3f00x1e) {
                            case 'name':
                                _0x3f00x11["test"](_0x3f00xb["value"]) ? _0x3f00x16(_0x3f00xb) : _0x3f00x17(_0x3f00xb);
                                break;
                            case 'number':
                                _0x3f00x13["test"](_0x3f00xb["value"]) ? _0x3f00x16(_0x3f00xb) : _0x3f00x17(_0x3f00xb);
                                break;
                            case 'email':
                                _0x3f00xf["test"](_0x3f00xb["value"]) ? _0x3f00x16(_0x3f00xb) : _0x3f00x17(_0x3f00xb);
                                break;
                            case 'text':
                                _0x3f00x15["test"](_0x3f00xb["value"]) ? _0x3f00x16(_0x3f00xb) : _0x3f00x17(_0x3f00xb);
                                break;
                            case 'url':
                                _0x3f00x14["test"](_0x3f00xb["value"]) ? _0x3f00x16(_0x3f00xb) : _0x3f00x17(_0x3f00xb);
                                break;
                            case 'tel':
                                _0x3f00x10["test"](_0x3f00xb["value"]) ? _0x3f00x16(_0x3f00xb) : _0x3f00x17(_0x3f00xb);
                                break;
                            case 'password':
                                _0x3f00x12["test"](_0x3f00xb["value"]) ? _0x3f00x16(_0x3f00xb) : _0x3f00x17(_0x3f00xb);
                                break
                        };
                        if (_0x3f00xb["value"] === "") {
                            _0x3f00x18(_0x3f00xb)
                        }
                    })
                })
            }
        };
        var _0x3f00x1f = document["querySelectorAll"]('.otp');
        if (_0x3f00x1f[0]) {
            _0x3f00x1f["forEach"]((_0x3f00xb) => {
                _0x3f00xb["addEventListener"]('focus', (_0x3f00xa) => {
                    _0x3f00xb["value"] = ""
                });
                _0x3f00xb["addEventListener"]('input', (_0x3f00xa) => {
                    _0x3f00xb["nextElementSibling"] ? _0x3f00xb["nextElementSibling"]["focus"]() : _0x3f00xb["blur"]()
                })
            })
        };
        var _0x3f00x20 = document["getElementsByClassName"]('splide');
        if (_0x3f00x20["length"]) {
            var _0x3f00x21 = document["querySelectorAll"]('.single-slider');
            if (_0x3f00x21["length"]) {
                _0x3f00x21["forEach"](function(_0x3f00xa) {
                    var _0x3f00x22 = new Splide('#' + _0x3f00xa["id"], {
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        perPage: 1
                    })["mount"]();
                    var _0x3f00x23 = document["querySelectorAll"]('.slider-next');
                    var _0x3f00x24 = document["querySelectorAll"]('.slider-prev');
                    _0x3f00x23["forEach"]((_0x3f00xb) => {
                        return _0x3f00xb["addEventListener"]('click', (_0x3f00xb) => {
                            _0x3f00x22["go"]('>')
                        })
                    });
                    _0x3f00x24["forEach"]((_0x3f00xb) => {
                        return _0x3f00xb["addEventListener"]('click', (_0x3f00xb) => {
                            _0x3f00x22["go"]('<')
                        })
                    })
                })
            };
            var _0x3f00x25 = document["querySelectorAll"]('.double-slider');
            if (_0x3f00x25["length"]) {
                _0x3f00x25["forEach"](function(_0x3f00xa) {
                    var _0x3f00x26 = new Splide('#' + _0x3f00xa["id"], {
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        arrows: false,
                        perPage: 2
                    })["mount"]()
                })
            };
            var _0x3f00x27 = document["querySelectorAll"]('.tripple-slider');
            if (_0x3f00x27["length"]) {
                _0x3f00x27["forEach"](function(_0x3f00xa) {
                    var _0x3f00x28 = new Splide('#' + _0x3f00xa["id"], {
                        type: 'loop',
                        autoplay: true,
                        padding: {
                            left: '0px',
                            right: '80px'
                        },
                        interval: 4000,
                        arrows: false,
                        perPage: 2,
                        perMove: 1
                    })["mount"]()
                })
            }
        };
        var _0x3f00x29 = document["querySelectorAll"]('.topic-slider');
        if (_0x3f00x29["length"]) {
            var _0x3f00x2a = new Splide('.topic-slider', {
                type: 'loop',
                autoplay: false,
                padding: {
                    left: '15px',
                    right: '40px'
                },
                arrows: false,
                perPage: 3,
                perMove: 1
            })["mount"]()
        };
        var _0x3f00x2b = document["querySelectorAll"]('.story-slider');
        if (_0x3f00x2b["length"]) {
            var _0x3f00x2a = new Splide('.story-slider', {
                type: 'loop',
                autoplay: false,
                padding: {
                    left: '0px',
                    right: '40px'
                },
                arrows: false,
                perPage: 4,
                perMove: 1
            })["mount"]()
        };
        const _0x3f00x2c = document["querySelectorAll"]('a[href=\"#\"]');
        _0x3f00x2c["forEach"]((_0x3f00xb) => {
            return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                _0x3f00xa["preventDefault"]();
                return false
            })
        });
        var _0x3f00x2d = document["querySelectorAll"]('.hide-map');
        if (_0x3f00x2d["length"]) {
            var _0x3f00x2e = document["querySelectorAll"]('.show-map');
            var _0x3f00x2f = document["querySelectorAll"]('.hide-map');
            _0x3f00x2e[0]["addEventListener"]('click', function(_0x3f00xa) {
                document["getElementsByClassName"]('card-overlay')[0]["classList"]["add"]('disabled');
                document["getElementsByClassName"]('card-center')[0]["classList"]["add"]('disabled');
                document["getElementsByClassName"]('hide-map')[0]["classList"]["remove"]('disabled')
            });
            _0x3f00x2f[0]["addEventListener"]('click', function(_0x3f00xa) {
                document["getElementsByClassName"]('card-overlay')[0]["classList"]["remove"]('disabled');
                document["getElementsByClassName"]('card-center')[0]["classList"]["remove"]('disabled');
                document["getElementsByClassName"]('hide-map')[0]["classList"]["add"]('disabled')
            })
        };
        var _0x3f00x30 = document["querySelectorAll"]('.check-card');
        _0x3f00x30["forEach"]((_0x3f00xb) => {
            return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                if (_0x3f00xb["querySelector"]('input')["getAttribute"]('checked') == "checked") {
                    _0x3f00xb["querySelector"]('input')["removeAttribute"]('checked')
                } else {
                    _0x3f00xb["querySelector"]('input')["setAttribute"]('checked', 'checked')
                }
            })
        });
        var _0x3f00x31 = document["querySelectorAll"]('.todo-list a');
        _0x3f00x31["forEach"]((_0x3f00xb) => {
            return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                _0x3f00xb["classList"]["toggle"]('opacity-80');
                if (_0x3f00xb["querySelector"]('input')["getAttribute"]('checked') == "checked") {
                    _0x3f00xb["querySelector"]('input')["removeAttribute"]('checked')
                } else {
                    _0x3f00xb["querySelector"]('input')["setAttribute"]('checked', 'checked')
                }
            })
        });
        var _0x3f00x32 = document["querySelectorAll"]('.menu');

        function _0x3f00x33() {
            if (_0x3f00x32["length"]) {
                var _0x3f00x34 = document["querySelectorAll"]('.menu-box-left, .menu-box-right');
                _0x3f00x34["forEach"](function(_0x3f00xa) {
                    if (_0x3f00xa["getAttribute"]('data-menu-width') === "cover") {
                        _0x3f00xa["style"]["width"] = '100%'
                    } else {
                        _0x3f00xa["style"]["width"] = (_0x3f00xa["getAttribute"]('data-menu-width')) + 'px'
                    }
                });
                var _0x3f00x35 = document["querySelectorAll"]('.menu-box-bottom, .menu-box-top, .menu-box-modal');
                _0x3f00x35["forEach"](function(_0x3f00xa) {
                    if (_0x3f00xa["getAttribute"]('data-menu-width') === "cover") {
                        _0x3f00xa["style"]["width"] = '100%';
                        _0x3f00xa["style"]["height"] = '100%'
                    } else {
                        _0x3f00xa["style"]["width"] = (_0x3f00xa["getAttribute"]('data-menu-width')) + 'px';
                        _0x3f00xa["style"]["height"] = (_0x3f00xa["getAttribute"]('data-menu-height')) + 'px'
                    }
                });
                var _0x3f00x36 = document["querySelectorAll"]('[data-menu]');
                var _0x3f00x37 = document["querySelectorAll"]('.header, #footer-bar, .page-content');
                _0x3f00x36["forEach"]((_0x3f00xb) => {
                    return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                        const _0x3f00x38 = document["querySelectorAll"]('.menu-active');
                        for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x38["length"]; _0x3f00x9++) {
                            _0x3f00x38[_0x3f00x9]["classList"]["remove"]('menu-active')
                        };
                        var _0x3f00x39 = _0x3f00xb["getAttribute"]('data-menu');
                        document["getElementById"](_0x3f00x39)["classList"]["add"]('menu-active');
                        document["getElementsByClassName"]('menu-hider')[0]["classList"]["add"]('menu-active');
                        var _0x3f00x3a = document["getElementById"](_0x3f00x39);
                        var _0x3f00x3b = _0x3f00x3a["getAttribute"]('data-menu-effect');
                        var _0x3f00x3c = _0x3f00x3a["classList"]["contains"]('menu-box-left');
                        var _0x3f00x3d = _0x3f00x3a["classList"]["contains"]('menu-box-right');
                        var _0x3f00x3e = _0x3f00x3a["classList"]["contains"]('menu-box-top');
                        var _0x3f00x3f = _0x3f00x3a["classList"]["contains"]('menu-box-bottom');
                        var _0x3f00x40 = _0x3f00x3a["offsetWidth"];
                        var _0x3f00x41 = _0x3f00x3a["offsetHeight"];
                        var _0x3f00x42 = _0x3f00x3a["getAttribute"]('data-menu-hide');
                        if (_0x3f00x42) {
                            setTimeout(function() {
                                document["getElementById"](_0x3f00x39)["classList"]["remove"]('menu-active');
                                document["getElementsByClassName"]('menu-hider')[0]["classList"]["remove"]('menu-active')
                            }, _0x3f00x42)
                        };
                        if (_0x3f00x3b === "menu-push") {
                            var _0x3f00x40 = document["getElementById"](_0x3f00x39)["getAttribute"]('data-menu-width');
                            if (_0x3f00x3c) {
                                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x37["length"]; _0x3f00x9++) {
                                    _0x3f00x37[_0x3f00x9]["style"]["transform"] = "translateX(" + _0x3f00x40 + "px)"
                                }
                            };
                            if (_0x3f00x3d) {
                                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x37["length"]; _0x3f00x9++) {
                                    _0x3f00x37[_0x3f00x9]["style"]["transform"] = "translateX(-" + _0x3f00x40 + "px)"
                                }
                            };
                            if (_0x3f00x3f) {
                                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x37["length"]; _0x3f00x9++) {
                                    _0x3f00x37[_0x3f00x9]["style"]["transform"] = "translateY(-" + _0x3f00x41 + "px)"
                                }
                            };
                            if (_0x3f00x3e) {
                                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x37["length"]; _0x3f00x9++) {
                                    _0x3f00x37[_0x3f00x9]["style"]["transform"] = "translateY(" + _0x3f00x41 + "px)"
                                }
                            }
                        };
                        if (_0x3f00x3b === "menu-parallax") {
                            var _0x3f00x40 = document["getElementById"](_0x3f00x39)["getAttribute"]('data-menu-width');
                            if (_0x3f00x3c) {
                                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x37["length"]; _0x3f00x9++) {
                                    _0x3f00x37[_0x3f00x9]["style"]["transform"] = "translateX(" + _0x3f00x40 / 10 + "px)"
                                }
                            };
                            if (_0x3f00x3d) {
                                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x37["length"]; _0x3f00x9++) {
                                    _0x3f00x37[_0x3f00x9]["style"]["transform"] = "translateX(-" + _0x3f00x40 / 10 + "px)"
                                }
                            };
                            if (_0x3f00x3f) {
                                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x37["length"]; _0x3f00x9++) {
                                    _0x3f00x37[_0x3f00x9]["style"]["transform"] = "translateY(-" + _0x3f00x41 / 5 + "px)"
                                }
                            };
                            if (_0x3f00x3e) {
                                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x37["length"]; _0x3f00x9++) {
                                    _0x3f00x37[_0x3f00x9]["style"]["transform"] = "translateY(" + _0x3f00x41 / 5 + "px)"
                                }
                            }
                        }
                    })
                });
                const _0x3f00x43 = document["querySelectorAll"]('.close-menu, .menu-hider');
                _0x3f00x43["forEach"]((_0x3f00xb) => {
                    return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                        const _0x3f00x38 = document["querySelectorAll"]('.menu-active');
                        for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x38["length"]; _0x3f00x9++) {
                            _0x3f00x38[_0x3f00x9]["classList"]["remove"]('menu-active')
                        };
                        for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x37["length"]; _0x3f00x9++) {
                            _0x3f00x37[_0x3f00x9]["style"]["transform"] = "translateX(-" + 0 + "px)"
                        }
                    })
                })
            }
        }
        _0x3f00x33();

        function _0x3f00x44() {
            const _0x3f00x45 = document["querySelectorAll"]('[data-menu-active]')[0];
            if (_0x3f00x45) {
                var _0x3f00x46 = _0x3f00x45["getAttribute"]('data-menu-active');
                document["querySelectorAll"]('#' + _0x3f00x46)[0]["classList"]["add"]('active-nav')
            }
        }
        const _0x3f00x47 = document["querySelectorAll"]('[data-back-button]');
        if (_0x3f00x47["length"]) {
            _0x3f00x47["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                    _0x3f00xa["stopPropagation"];
                    _0x3f00xa["preventDefault"];
                    window["history"]["go"](-1)
                })
            })
        };

        function _0x3f00x48() {
            const _0x3f00x49 = document["querySelectorAll"]('.back-to-top-icon, .back-to-top-badge, .back-to-top');
            if (_0x3f00x49) {
                _0x3f00x49["forEach"]((_0x3f00xb) => {
                    return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                        window["scrollTo"]({
                            top: 0,
                            behavior: `smooth`
                        })
                    })
                })
            }
        }

        function _0x3f00x4a() {
            let _0x3f00x4b, _0x3f00x4c;
            if (/iP(hone|od|ad)/ ["test"](navigator["platform"])) {
                _0x3f00x4c = (navigator["appVersion"])["match"](/OS (\d+)_(\d+)_?(\d+)?/);
                _0x3f00x4b = {
                    status: true,
                    version: parseInt(_0x3f00x4c[1], 10),
                    info: parseInt(_0x3f00x4c[1], 10) + '.' + parseInt(_0x3f00x4c[2], 10) + '.' + parseInt(_0x3f00x4c[3] || 0, 10)
                }
            } else {
                _0x3f00x4b = {
                    status: false,
                    version: false,
                    info: ''
                }
            };
            return _0x3f00x4b
        }
        let _0x3f00x4d = _0x3f00x4a();
        if (_0x3f00x4d["version"] > 14) {
            document["querySelectorAll"]('#page')[0]["classList"]["add"]('min-ios15')
        };
        const _0x3f00x4e = document["getElementsByClassName"]('card');

        function _0x3f00x4f() {
            var _0x3f00x50, _0x3f00x51, _0x3f00x52;
            var _0x3f00x52 = document["querySelectorAll"]('.header:not(.header-transparent)')[0];
            var _0x3f00x53 = document["querySelectorAll"]('#footer-bar')[0];
            _0x3f00x52 ? _0x3f00x50 = document["querySelectorAll"]('.header')[0]["offsetHeight"] : _0x3f00x50 = 0;
            _0x3f00x53 ? _0x3f00x51 = document["querySelectorAll"]('#footer-bar')[0]["offsetHeight"] : _0x3f00x51 = 0;
            for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x4e["length"]; _0x3f00x9++) {
                if (_0x3f00x4e[_0x3f00x9]["getAttribute"]('data-card-height') === "cover") {
                    if (window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                        var _0x3f00x54 = window["outerHeight"]
                    };
                    if (!window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                        var _0x3f00x54 = window["innerHeight"]
                    };
                    var _0x3f00x55 = _0x3f00x54 + 'px'
                };
                if (_0x3f00x4e[_0x3f00x9]["getAttribute"]('data-card-height') === "cover-card") {
                    var _0x3f00x54 = window["innerHeight"];
                    var _0x3f00x55 = _0x3f00x54 - 200 + 'px';
                    _0x3f00x4e[_0x3f00x9]["style"]["height"] = _0x3f00x55
                };
                if (_0x3f00x4e[_0x3f00x9]["getAttribute"]('data-card-height') === "cover-full") {
                    if (window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                        var _0x3f00x54 = window["outerHeight"]
                    };
                    if (!window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                        var _0x3f00x54 = window["innerHeight"]
                    };
                    var _0x3f00x55 = _0x3f00x54 + 'px';
                    _0x3f00x4e[_0x3f00x9]["style"]["height"] = _0x3f00x55
                };
                if (_0x3f00x4e[_0x3f00x9]["hasAttribute"]('data-card-height')) {
                    var _0x3f00x56 = _0x3f00x4e[_0x3f00x9]["getAttribute"]('data-card-height');
                    _0x3f00x4e[_0x3f00x9]["style"]["height"] = _0x3f00x56 + 'px';
                    if (_0x3f00x56 === "cover") {
                        var _0x3f00x57 = _0x3f00x56;
                        _0x3f00x4e[_0x3f00x9]["style"]["height"] = _0x3f00x55
                    }
                }
            }
        }
        if (_0x3f00x4e["length"]) {
            _0x3f00x4f();
            window["addEventListener"]("resize", _0x3f00x4f)
        };

        function _0x3f00x58() {
            var _0x3f00x59 = localStorage["getItem"](_0x3f00x3 + '-Highlight');
            if (_0x3f00x59) {
                document["querySelectorAll"]('[data-change-highlight=\"' + _0x3f00x59 + '\"]')[0]["classList"]["add"]('highlight-active');
                document["body"]["setAttribute"]('data-highlight', _0x3f00x59)
            }
        }

        function _0x3f00x5a() {
            var _0x3f00x5b = document["querySelectorAll"]('[data-change-highlight]');
            _0x3f00x5b["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                    const _0x3f00x5c = document["querySelectorAll"]('.highlight-active');
                    for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x5c["length"]; _0x3f00x9++) {
                        _0x3f00x5c[_0x3f00x9]["classList"]["remove"]('highlight-active')
                    };
                    _0x3f00xb["classList"]["add"]('highlight-active');
                    var _0x3f00x5d = _0x3f00xb["getAttribute"]('data-change-highlight');
                    var _0x3f00x5e = document["querySelectorAll"]('.page-highlight');
                    if (_0x3f00x5e["length"]) {
                        _0x3f00x5e["forEach"](function(_0x3f00xa) {
                            _0x3f00xa["remove"]()
                        })
                    };
                    var _0x3f00x5f = document["createElement"]("link");
                    _0x3f00x5f["rel"] = "stylesheet";
                    _0x3f00x5f["className"] = "page-highlight";
                    _0x3f00x5f["type"] = "text/css";
                    _0x3f00x5f["href"] = 'styles/highlights/highlight_' + _0x3f00x5d + '.css';
                    document["getElementsByTagName"]("head")[0]["appendChild"](_0x3f00x5f);
                    document["body"]["setAttribute"]('data-highlight', 'highlight-' + _0x3f00x5d);
                    localStorage["setItem"](_0x3f00x3 + '-Highlight', _0x3f00x5d)
                })
            });
            var _0x3f00x59 = localStorage["getItem"](_0x3f00x3 + '-Highlight');
            if (_0x3f00x59) {
                var _0x3f00x5f = document["createElement"]("link");
                _0x3f00x5f["rel"] = "stylesheet";
                _0x3f00x5f["className"] = "page-highlight";
                _0x3f00x5f["type"] = "text/css";
                _0x3f00x5f["href"] = 'styles/highlights/highlight_' + _0x3f00x59 + '.css';
                if (!document["querySelectorAll"]('.page-highlight')["length"]) {
                    document["getElementsByTagName"]("head")[0]["appendChild"](_0x3f00x5f);
                    document["body"]["setAttribute"]('data-highlight', 'highlight-' + _0x3f00x59)
                }
            }
        }
        _0x3f00x5a();
        var _0x3f00x60 = document["querySelectorAll"]('[data-change-background]');
        _0x3f00x60["forEach"]((_0x3f00xb) => {
            return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                var _0x3f00x61 = _0x3f00xb["getAttribute"]('data-change-background');
                document["body"]["setAttribute"]('data-gradient', 'body-' + _0x3f00x61 + '');
                localStorage["setItem"](_0x3f00x3 + '-Gradient', _0x3f00x61)
            })
        });
        var _0x3f00x62 = localStorage["getItem"](_0x3f00x3 + '-Gradient');
        if (_0x3f00x62) {
            document["body"]["setAttribute"]('data-gradient', 'body-' + _0x3f00x62 + '')
        };

        function _0x3f00x63() {
            const _0x3f00x64 = document["querySelectorAll"]('[data-toggle-theme]');

            function _0x3f00x65() {
                document["body"]["classList"]["add"]('theme-dark');
                document["body"]["classList"]["remove"]('theme-light', 'detect-theme');
                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x64["length"]; _0x3f00x9++) {
                    _0x3f00x64[_0x3f00x9]["checked"] = "checked"
                };
                localStorage["setItem"](_0x3f00x3 + '-Theme', 'dark-mode')
            }

            function _0x3f00x66() {
                document["body"]["classList"]["add"]('theme-light');
                document["body"]["classList"]["remove"]('theme-dark', 'detect-theme');
                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x64["length"]; _0x3f00x9++) {
                    _0x3f00x64[_0x3f00x9]["checked"] = false
                };
                localStorage["setItem"](_0x3f00x3 + '-Theme', 'light-mode')
            }

            function _0x3f00x67() {
                var _0x3f00x68 = document["querySelectorAll"]('.btn, .header, #footer-bar, .menu-box, .menu-active');
                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x68["length"]; _0x3f00x9++) {
                    _0x3f00x68[_0x3f00x9]["style"]["transition"] = "all 0s ease"
                }
            }

            function _0x3f00x69() {
                var _0x3f00x6a = document["querySelectorAll"]('.btn, .header, #footer-bar, .menu-box, .menu-active');
                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x6a["length"]; _0x3f00x9++) {
                    _0x3f00x6a[_0x3f00x9]["style"]["transition"] = ""
                }
            }

            function _0x3f00x6b() {
                const _0x3f00x6c = window["matchMedia"]("(prefers-color-scheme: dark)")["matches"];
                const _0x3f00x6d = window["matchMedia"]("(prefers-color-scheme: light)")["matches"];
                const _0x3f00x6e = window["matchMedia"]("(prefers-color-scheme: no-preference)")["matches"];
                window["matchMedia"]("(prefers-color-scheme: dark)")["addListener"]((_0x3f00xa) => {
                    return _0x3f00xa["matches"] && _0x3f00x65()
                });
                window["matchMedia"]("(prefers-color-scheme: light)")["addListener"]((_0x3f00xa) => {
                    return _0x3f00xa["matches"] && _0x3f00x66()
                });
                if (_0x3f00x6c) {
                    _0x3f00x65()
                };
                if (_0x3f00x6d) {
                    _0x3f00x66()
                }
            }
            var _0x3f00x6f = document["querySelectorAll"]('[data-toggle-theme]');
            _0x3f00x6f["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                    if (document["body"]["className"] == "theme-light") {
                        _0x3f00x67();
                        _0x3f00x65()
                    } else {
                        if (document["body"]["className"] == "theme-dark") {
                            _0x3f00x67();
                            _0x3f00x66()
                        }
                    };
                    setTimeout(function() {
                        _0x3f00x69()
                    }, 350)
                })
            });
            if (localStorage["getItem"](_0x3f00x3 + '-Theme') == "dark-mode") {
                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x64["length"]; _0x3f00x9++) {
                    _0x3f00x64[_0x3f00x9]["checked"] = "checked"
                };
                document["body"]["className"] = 'theme-dark'
            };
            if (localStorage["getItem"](_0x3f00x3 + '-Theme') == "light-mode") {
                document["body"]["className"] = 'theme-light'
            };
            if (document["body"]["className"] == "detect-theme") {
                _0x3f00x6b()
            };
            const _0x3f00x70 = document["querySelectorAll"]('.detect-dark-mode');
            _0x3f00x70["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                    document["body"]["classList"]["remove"]('theme-light', 'theme-dark');
                    document["body"]["classList"]["add"]('detect-theme');
                    setTimeout(function() {
                        _0x3f00x6b()
                    }, 50)
                })
            })
        }
        if (localStorage["getItem"](_0x3f00x3 + '-Theme') == "dark-mode") {
            document["body"]["className"] = 'theme-dark'
        };
        if (localStorage["getItem"](_0x3f00x3 + '-Theme') == "light-mode") {
            document["body"]["className"] = 'theme-light'
        };
        const _0x3f00x71 = document["querySelectorAll"]('.accordion-btn');
        if (_0x3f00x71["length"]) {
            _0x3f00x71["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00x72) => {
                    _0x3f00xb["querySelector"]('i:last-child')["classList"]["toggle"]('fa-rotate-180')
                })
            })
        };
        const _0x3f00x73 = document["getElementsByClassName"]('upload-file');
        if (_0x3f00x73["length"]) {
            _0x3f00x73[0]["addEventListener"]('change', _0x3f00x74, false);

            function _0x3f00x74(_0x3f00x72) {
                if (this["files"] && this["files"][0]) {
                    var _0x3f00x75 = document["getElementById"]('image-data');
                    _0x3f00x75["src"] = URL["createObjectURL"](this["files"][0])
                };
                const _0x3f00x76 = _0x3f00x72["target"]["files"];
                const _0x3f00x77 = _0x3f00x76[0]["name"];
                document["getElementsByClassName"]('file-data')[0]["classList"]["add"]('disabled');
                document["getElementsByClassName"]('upload-file-data')[0]["classList"]["remove"]('disabled');
                document["getElementsByClassName"]('upload-file-name')[0]["innerHTML"] = _0x3f00x76[0]["name"];
                document["getElementsByClassName"]('upload-file-modified')[0]["innerHTML"] = _0x3f00x76[0]["lastModifiedDate"];
                document["getElementsByClassName"]('upload-file-size')[0]["innerHTML"] = _0x3f00x76[0]["size"] / 1000 + 'kb';
                document["getElementsByClassName"]('upload-file-type')[0]["innerHTML"] = _0x3f00x76[0]["type"]
            }
        };
        var _0x3f00x78 = document["querySelectorAll"]('.get-location');
        if (_0x3f00x78["length"]) {
            var _0x3f00x79 = document["getElementsByClassName"]('location-support')[0];
            if (typeof(_0x3f00x79) != 'undefined' && _0x3f00x79 != null) {
                if ("geolocation" in navigator) {
                    _0x3f00x79["innerHTML"] = 'Your browser and device <strong class=\"color-green2-dark\">support</strong> Geolocation.'
                } else {
                    _0x3f00x79["innerHTML"] = 'Your browser and device <strong class=\"color-red2-dark\">support</strong> Geolocation.'
                }
            };

            function _0x3f00x7a() {
                const _0x3f00x7b = document["querySelector"]('.location-coordinates');

                function _0x3f00x7c(_0x3f00x7d) {
                    const _0x3f00x7e = _0x3f00x7d["coords"]["latitude"];
                    const _0x3f00x7f = _0x3f00x7d["coords"]["longitude"];
                    _0x3f00x7b["innerHTML"] = '<strong>Longitude:</strong> ' + _0x3f00x7f + '<br><strong>Latitude:</strong> ' + _0x3f00x7e;
                    var _0x3f00x80 = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyAM3nxDVrkjyKwdIZp8QOplmBKLRVI5S_Y&center=';
                    var _0x3f00x81 = _0x3f00x7e + ',';
                    var _0x3f00x82 = _0x3f00x7f;
                    var _0x3f00x83 = '&zoom=16&maptype=satellite';
                    var _0x3f00x84 = '';
                    var _0x3f00x85 = _0x3f00x80 + _0x3f00x81 + _0x3f00x82 + _0x3f00x83;
                    var _0x3f00x86 = _0x3f00x80 + _0x3f00x81 + _0x3f00x82 + _0x3f00x84;
                    document["getElementsByClassName"]('location-map')[0]["setAttribute"]('src', _0x3f00x85);
                    document["getElementsByClassName"]('location-button')[0]["setAttribute"]('href', _0x3f00x86);
                    document["getElementsByClassName"]('location-button')[0]["classList"]["remove"]('disabled')
                }

                function _0x3f00x87() {
                    _0x3f00x7b["textContent"] = 'Unable to retrieve your location'
                }
                if (!navigator["geolocation"]) {
                    _0x3f00x7b["textContent"] = 'Geolocation is not supported by your browser'
                } else {
                    _0x3f00x7b["textContent"] = 'Locating';
                    navigator["geolocation"]["getCurrentPosition"](_0x3f00x7c, _0x3f00x87)
                }
            }
            var _0x3f00x88 = document["getElementsByClassName"]('get-location')[0];
            if (typeof(_0x3f00x88) != 'undefined' && _0x3f00x88 != null) {
                _0x3f00x88["addEventListener"]('click', function() {
                    this["classList"]["add"]('disabled');
                    _0x3f00x7a()
                })
            }
        };
        const _0x3f00x89 = document["querySelectorAll"]('.card-scale');
        if (_0x3f00x89["length"]) {
            _0x3f00x89["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseenter', (_0x3f00x72) => {
                    _0x3f00xb["querySelectorAll"]('img')[0]["classList"]["add"]('card-scale-image')
                })
            });
            _0x3f00x89["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseleave', (_0x3f00x72) => {
                    _0x3f00xb["querySelectorAll"]('img')[0]["classList"]["remove"]('card-scale-image')
                })
            })
        };
        const _0x3f00x8a = document["querySelectorAll"]('.card-hide');
        if (_0x3f00x8a["length"]) {
            _0x3f00x8a["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseenter', (_0x3f00x72) => {
                    _0x3f00xb["querySelectorAll"]('.card-center, .card-bottom, .card-top, .card-overlay')[0]["classList"]["add"]('card-hide-image')
                })
            });
            _0x3f00x8a["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseleave', (_0x3f00x72) => {
                    _0x3f00xb["querySelectorAll"]('.card-center, .card-bottom, .card-top, .card-overlay')[0]["classList"]["remove"]('card-hide-image')
                })
            })
        };
        const _0x3f00x8b = document["querySelectorAll"]('.card-rotate');
        if (_0x3f00x8b["length"]) {
            _0x3f00x8b["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseenter', (_0x3f00x72) => {
                    _0x3f00xb["querySelectorAll"]('img')[0]["classList"]["add"]('card-rotate-image')
                })
            });
            _0x3f00x8b["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseleave', (_0x3f00x72) => {
                    _0x3f00xb["querySelectorAll"]('img')[0]["classList"]["remove"]('card-rotate-image')
                })
            })
        };
        const _0x3f00x8c = document["querySelectorAll"]('.card-grayscale');
        if (_0x3f00x8c["length"]) {
            _0x3f00x8c["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseenter', (_0x3f00x72) => {
                    _0x3f00xb["querySelectorAll"]('img')[0]["classList"]["add"]('card-grayscale-image')
                })
            });
            _0x3f00x8c["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseleave', (_0x3f00x72) => {
                    _0x3f00xb["querySelectorAll"]('img')[0]["classList"]["remove"]('card-grayscale-image')
                })
            })
        };
        const _0x3f00x8d = document["querySelectorAll"]('.card-blur');
        if (_0x3f00x8d["length"]) {
            _0x3f00x8d["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseenter', (_0x3f00x72) => {
                    _0x3f00xb["querySelectorAll"]('img')[0]["classList"]["add"]('card-blur-image')
                })
            });
            _0x3f00x8d["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseleave', (_0x3f00x72) => {
                    _0x3f00xb["querySelectorAll"]('img')[0]["classList"]["remove"]('card-blur-image')
                })
            })
        };
        var _0x3f00x8e = document["querySelectorAll"]('.check-visited');
        if (_0x3f00x8e["length"]) {
            function _0x3f00x8f() {
                var _0x3f00x90 = JSON["parse"](localStorage["getItem"](_0x3f00x3 + '_Visited_Links')) || [];
                var _0x3f00x91 = document["querySelectorAll"]('.check-visited a');
                for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x91["length"]; _0x3f00x9++) {
                    var _0x3f00x92 = _0x3f00x91[_0x3f00x9];
                    _0x3f00x92["addEventListener"]('click', function(_0x3f00xa) {
                        var _0x3f00x93 = this["href"];
                        if (_0x3f00x90["indexOf"](_0x3f00x93) == -1) {
                            _0x3f00x90["push"](_0x3f00x93);
                            localStorage["setItem"](_0x3f00x3 + '_Visited_Links', JSON["stringify"](_0x3f00x90))
                        }
                    });
                    if (_0x3f00x90["indexOf"](_0x3f00x92["href"]) !== -1) {
                        _0x3f00x92["className"] += ' visited-link'
                    }
                }
            }
            _0x3f00x8f()
        };
        var _0x3f00x94 = document["querySelectorAll"]('.footer-bar-6')[0];
        if (_0x3f00x94) {
            var _0x3f00x95 = document["querySelectorAll"]('.footer-bar-6 .active-nav')[0];
            var _0x3f00x96 = document["querySelectorAll"]('.footer-bar-6 .circle-nav')[0];
            _0x3f00x95["insertAdjacentHTML"]('beforeend', '<em></em>');
            _0x3f00x96["insertAdjacentHTML"]('beforeend', '<strong><u></u></strong>')
        };
        var _0x3f00x97 = document["getElementById"]('adblock-message');
        if (_0x3f00x97) {
            var _0x3f00x98 = false;
            document["body"]["innerHTML"] += '<div class=\"adsbygoogle\" id=\"ad-detector\"></div>';
            var _0x3f00x99 = document["getElementById"]('ad-detector');
            var _0x3f00x9a = getComputedStyle(_0x3f00x99, null);
            if (_0x3f00x9a["display"] === 'none') {
                document["getElementById"]('adblock-message')["classList"]["remove"]('disabled')
            }
        };
        let _0x3f00x9b = document["querySelectorAll"]('.fixed-ad')[0];
        let _0x3f00x9c = document["querySelectorAll"]('.scroll-ad')[0];
        if (_0x3f00x9b || _0x3f00x9c) {
            var _0x3f00x9d = document["getElementById"]('activate-scroll-ad');
            _0x3f00x9d["addEventListener"]('click', function() {
                _0x3f00x9c["classList"]["add"]('scroll-ad-visible');
                _0x3f00x9c["classList"]["remove"]('disabled');
                _0x3f00x9b["classList"]["add"]('disabled')
            });
            var _0x3f00x9e = document["getElementById"]('activate-fixed-ad');
            _0x3f00x9e["addEventListener"]('click', function() {
                _0x3f00x9c["classList"]["add"]('disabled');
                _0x3f00x9b["classList"]["remove"]('disabled')
            })
        };
        var _0x3f00x9f = document["querySelectorAll"]('.scroll-ad, .header-auto-show');
        if (_0x3f00x9f["length"]) {
            var _0x3f00xa0 = document["querySelectorAll"]('.scroll-ad');
            var _0x3f00xa1 = document["querySelectorAll"]('.header-auto-show');
            var _0x3f00xa2 = document["querySelectorAll"]('.page-title');
            window["addEventListener"]('scroll', function() {
                if (document["querySelectorAll"]('.scroll-ad, .header-auto-show')["length"]) {
                    function _0x3f00xa3() {
                        _0x3f00xa0[0]["classList"]["add"]('scroll-ad-visible')
                    }

                    function _0x3f00xa4() {
                        _0x3f00xa0[0]["classList"]["remove"]('scroll-ad-visible')
                    }

                    function _0x3f00xa5() {
                        _0x3f00xa1[0]["classList"]["add"]('header-active')
                    }

                    function _0x3f00xa6() {
                        _0x3f00xa1[0]["classList"]["remove"]('header-active')
                    }

                    function _0x3f00xa7() {
                        _0x3f00xa2[0]["style"]["opacity"] = "0"
                    }

                    function _0x3f00xa8() {
                        _0x3f00xa2[0]["style"]["opacity"] = "1"
                    }
                    var _0x3f00xa9 = window["outerWidth"];
                    var _0x3f00xaa = document["documentElement"]["scrollTop"];
                    let _0x3f00xab = _0x3f00xaa <= 80;
                    var _0x3f00xac = _0x3f00xaa >= 80;
                    let _0x3f00xad = _0x3f00xaa <= 40;
                    var _0x3f00xae = _0x3f00xaa >= 40;
                    let _0x3f00xaf = (_0x3f00xa9 - _0x3f00xaa + 1000) <= 150;
                    if (_0x3f00xa0["length"]) {
                        _0x3f00xab ? _0x3f00xa4() : null;
                        _0x3f00xac ? _0x3f00xa3() : null;
                        _0x3f00xaf ? _0x3f00xa4() : null
                    };
                    if (_0x3f00xa1["length"]) {
                        _0x3f00xab ? _0x3f00xa6() : null;
                        _0x3f00xac ? _0x3f00xa5() : null
                    };
                    if (_0x3f00xa2["length"]) {
                        _0x3f00xad ? _0x3f00xa8() : null;
                        _0x3f00xae ? _0x3f00xa7() : null
                    }
                }
            })
        };
        var _0x3f00xb0 = document["querySelectorAll"]('.stepper-add');
        var _0x3f00xb1 = document["querySelectorAll"]('.stepper-sub');
        if (_0x3f00xb0["length"]) {
            _0x3f00xb0["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00x72) => {
                    var _0x3f00xb2 = _0x3f00xb["parentElement"]["querySelector"]('input')["value"];
                    _0x3f00xb["parentElement"]["querySelector"]('input')["value"] = +_0x3f00xb2 + 1
                })
            });
            _0x3f00xb1["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00x72) => {
                    var _0x3f00xb2 = _0x3f00xb["parentElement"]["querySelector"]('input')["value"];
                    _0x3f00xb["parentElement"]["querySelector"]('input')["value"] = +_0x3f00xb2 - 1
                })
            })
        };
        var _0x3f00xb3 = document["querySelectorAll"]('[data-trigger-switch]:not([data-toggle-theme])');
        if (_0x3f00xb3["length"]) {
            _0x3f00xb3["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00x72) => {
                    var _0x3f00xb4 = _0x3f00xb["getAttribute"]('data-trigger-switch');
                    var _0x3f00xb5 = document["getElementById"](_0x3f00xb4);
                    _0x3f00xb5["checked"] ? _0x3f00xb5["checked"] = false : _0x3f00xb5["checked"] = true
                })
            })
        };
        var _0x3f00xb6 = document["querySelectorAll"]('.classic-toggle');
        if (_0x3f00xb6["length"]) {
            _0x3f00xb6["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00x72) => {
                    _0x3f00xb["querySelector"]('i:last-child')["classList"]["toggle"]('fa-rotate-180');
                    _0x3f00xb["querySelector"]('i:last-child')["style"]["transition"] = "all 250ms ease"
                })
            })
        };
        var _0x3f00xb7 = document["querySelectorAll"]('[data-toast]');
        if (_0x3f00xb7["length"]) {
            _0x3f00xb7["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00x72) => {
                    var _0x3f00xb8 = _0x3f00xb["getAttribute"]('data-toast');
                    var _0x3f00xb9 = document["getElementById"](_0x3f00xb8);
                    var _0x3f00xb9 = new bootstrap.Toast(_0x3f00xb9);
                    _0x3f00xb9["show"]()
                })
            })
        };
        var _0x3f00xba = []["slice"]["call"](document["querySelectorAll"]('[data-bs-toggle=\"dropdown\"]'));
        if (_0x3f00xba["length"]) {
            var _0x3f00xbb = _0x3f00xba["map"](function(_0x3f00xbc) {
                return new bootstrap.Dropdown(_0x3f00xbc)
            })
        };
        var _0x3f00xbd = document["querySelectorAll"]('.show-business-opened, .show-business-closed, .working-hours');
        if (_0x3f00xbd["length"]) {
            var _0x3f00x4b = new Date();
            var _0x3f00xbe = _0x3f00x4b["getDay"]();
            var _0x3f00xbf = _0x3f00x4b["getHours"]() + "." + _0x3f00x4b["getMinutes"]();
            var _0x3f00xc0 = [
                ["Sunday"],
                ["Monday", 9.00, 17.00],
                ["Tuesday", 9.00, 17.00],
                ["Wednesday", 9.00, 17.00],
                ["Thursday", 9.00, 17.00],
                ["Friday", 9.00, 17.00],
                ["Saturday", 9.00, 13.00]
            ];
            var _0x3f00xc1 = _0x3f00xc0[_0x3f00xbe];
            var _0x3f00xc2 = document["querySelectorAll"]('.show-business-opened');
            var _0x3f00xc3 = document["querySelectorAll"]('.show-business-closed');
            if (_0x3f00xbf > _0x3f00xc1[1] && _0x3f00xbf < _0x3f00xc1[2] || _0x3f00xbf > _0x3f00xc1[3] && _0x3f00xbf < _0x3f00xc1[4]) {
                _0x3f00xc2["forEach"](function(_0x3f00xa) {
                    _0x3f00xa["classList"]["remove"]('disabled')
                });
                _0x3f00xc3["forEach"](function(_0x3f00xa) {
                    _0x3f00xa["classList"]["add"]('disabled')
                })
            } else {
                _0x3f00xc2["forEach"](function(_0x3f00xa) {
                    _0x3f00xa["classList"]["add"]('disabled')
                });
                _0x3f00xc3["forEach"](function(_0x3f00xa) {
                    _0x3f00xa["classList"]["remove"]('disabled')
                })
            };
            var _0x3f00xbd = document["querySelectorAll"]('.working-hours[data-day]');
            _0x3f00xbd["forEach"](function(_0x3f00xc4) {
                var _0x3f00xc5 = _0x3f00xc4["getAttribute"]('data-day');
                if (_0x3f00xc5 === _0x3f00xc1[0]) {
                    var _0x3f00xc6 = '[data-day=\"' + _0x3f00xc1[0] + '\"]';
                    if (_0x3f00xbf > _0x3f00xc1[1] && _0x3f00xbf < _0x3f00xc1[2] || _0x3f00xbf > _0x3f00xc1[3] && _0x3f00xbf < _0x3f00xc1[4]) {
                        document["querySelectorAll"](_0x3f00xc6)[0]["classList"]["add"]('bg-green-dark');
                        document["querySelectorAll"](_0x3f00xc6 + ' p')["forEach"](function(_0x3f00xc7) {
                            _0x3f00xc7["classList"]["add"]('color-white')
                        })
                    } else {
                        document["querySelectorAll"](_0x3f00xc6)[0]["classList"]["add"]('bg-red-dark');
                        document["querySelectorAll"](_0x3f00xc6 + ' p')["forEach"](function(_0x3f00xc7) {
                            _0x3f00xc7["classList"]["add"]('color-white')
                        })
                    }
                }
            })
        };
        var _0x3f00xc8 = document["querySelectorAll"]('[data-vibrate]');
        if (_0x3f00xc8["length"]) {
            var _0x3f00xc9 = document["getElementsByClassName"]('start-vibrating')[0];
            var _0x3f00xca = document["getElementsByClassName"]('stop-vibrating')[0];
            _0x3f00xc9["addEventListener"]('click', function() {
                var _0x3f00xcb = document["getElementsByClassName"]('vibrate-demo')[0]["value"];
                window["navigator"]["vibrate"](_0x3f00xcb)
            });
            _0x3f00xca["addEventListener"]('click', function() {
                window["navigator"]["vibrate"](0)
            });
            _0x3f00xc8["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                    var _0x3f00xcb = _0x3f00xb["getAttribute"]('data-vibrate');
                    window["navigator"]["vibrate"](_0x3f00xcb)
                })
            })
        };
        var _0x3f00xcc = document["querySelectorAll"]('[data-timed-ad]');
        if (_0x3f00xcc["length"]) {
            _0x3f00xcc["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                    var _0x3f00xcd = _0x3f00xb["getAttribute"]('data-timed-ad');
                    var _0x3f00xce = _0x3f00xb["getAttribute"]('data-menu');
                    var _0x3f00xcf = _0x3f00xcd;
                    var _0x3f00xd0 = setInterval(function() {
                        if (_0x3f00xcf <= 1) {
                            clearInterval(_0x3f00xd0);
                            document["getElementById"](_0x3f00xce)["querySelectorAll"]('.fa-times')[0]["classList"]["remove"]('disabled');
                            document["getElementById"](_0x3f00xce)["querySelectorAll"]('.close-menu')[0]["classList"]["remove"]('no-click');
                            document["getElementById"](_0x3f00xce)["querySelectorAll"]('span')[0]["style"]["display"] = "none"
                        } else {};
                        document["getElementById"](_0x3f00xce)["querySelectorAll"]('span')[0]["innerHTML"] = _0x3f00xcf -= 1
                    }, 1000)
                })
            })
        };
        var _0x3f00xd1 = document["querySelectorAll"]('[data-auto-show-ad]');
        if (_0x3f00xd1["length"]) {
            var _0x3f00xd2 = _0x3f00xd1[0]["getAttribute"]('data-auto-show-ad');
            var _0x3f00xd0 = setInterval(function() {
                if (_0x3f00xd2 <= 1) {
                    clearInterval(_0x3f00xd0);
                    var _0x3f00xd3 = _0x3f00xd1[0]["getAttribute"]('data-menu');
                    document["getElementById"](_0x3f00xd3)["classList"]["add"]('menu-active');
                    var _0x3f00xd4 = _0x3f00xd1[0]["getAttribute"]('data-timed-ad');
                    var _0x3f00xd5 = setInterval(function() {
                        if (_0x3f00xd4 <= 0) {
                            clearInterval(_0x3f00xd5);
                            document["getElementById"](_0x3f00xd3)["querySelectorAll"]('.fa-times')[0]["classList"]["remove"]('disabled');
                            document["getElementById"](_0x3f00xd3)["querySelectorAll"]('.close-menu')[0]["classList"]["remove"]('no-click');
                            document["getElementById"](_0x3f00xd3)["querySelectorAll"]('span')[0]["style"]["display"] = "none"
                        };
                        document["getElementById"](_0x3f00xd3)["querySelectorAll"]('span')[0]["innerHTML"] = _0x3f00xd4 -= 1
                    }, 1000)
                };
                _0x3f00xd2 -= 1
            }, 1000)
        };
        var _0x3f00xd6 = document["querySelectorAll"]('.visit-detection')[0];
        if (_0x3f00xd6) {
            var _0x3f00xd7 = document["querySelectorAll"]('.never-visited')[0];
            var _0x3f00xd8 = document["querySelectorAll"]('.before-visited')[0];
            var _0x3f00xd9 = document["querySelectorAll"]('.visit-before-time')[0];
            var _0x3f00xda = localStorage["getItem"](_0x3f00x3 + '-Last-Visited');
            var _0x3f00x4b = new Date();
            var _0x3f00xdb = _0x3f00x4b["getFullYear"]() + "/" + (_0x3f00x4b["getMonth"]() + 1) + "/" + _0x3f00x4b["getDate"]();
            var _0x3f00xdc = _0x3f00x4b["getHours"]() + ":" + _0x3f00x4b["getMinutes"]() + ":" + _0x3f00x4b["getSeconds"]();
            if (!_0x3f00xda) {
                _0x3f00xd7["style"]["display"] = "block";
                _0x3f00xd8["style"]["display"] = "none";
                localStorage["setItem"](_0x3f00x3 + '-Last-Visited', 'Your last visit was ' + _0x3f00xdb + ' at ' + _0x3f00xdc)
            } else {
                _0x3f00xd7["style"]["display"] = "none";
                _0x3f00xd8["style"]["display"] = "block";
                _0x3f00xd9["append"](_0x3f00xda);
                localStorage["setItem"](_0x3f00x3 + '-Last-Visited', 'Your last visit was ' + _0x3f00xdb + ' at ' + _0x3f00xdc)
            }
        };
        var _0x3f00xdd = document["querySelectorAll"]('.reading-progress-text');
        if (_0x3f00xdd["length"]) {
            var _0x3f00xde = _0x3f00xdd[0]["innerHTML"]["split"](' ')["length"];
            var _0x3f00xdf = Math["floor"](_0x3f00xde / 250);
            var _0x3f00xe0 = _0x3f00xde % 60;
            document["getElementsByClassName"]('reading-progress-words')[0]["innerHTML"] = _0x3f00xde;
            document["getElementsByClassName"]('reading-progress-time')[0]["innerHTML"] = _0x3f00xdf + ':' + _0x3f00xe0
        };
        var _0x3f00xe1 = document["querySelectorAll"]('.text-size-changer');
        if (_0x3f00xe1["length"]) {
            var _0x3f00xe2 = document["querySelectorAll"]('.text-size-increase');
            var _0x3f00xe3 = document["querySelectorAll"]('.text-size-decrease');
            var _0x3f00xe4 = document["querySelectorAll"]('.text-size-default');
            _0x3f00xe2[0]["addEventListener"]('click', function() {
                _0x3f00xe1[0]["querySelectorAll"]('*')["forEach"](function(_0x3f00xe5) {
                    const _0x3f00xe6 = window["getComputedStyle"](_0x3f00xe5)["fontSize"]["split"]("px", 2)[0];
                    _0x3f00xe5["style"]["fontSize"] = (+_0x3f00xe6 + 1) + 'px'
                })
            });
            _0x3f00xe3[0]["addEventListener"]('click', function() {
                _0x3f00xe1[0]["querySelectorAll"]('*')["forEach"](function(_0x3f00xe5) {
                    const _0x3f00xe6 = window["getComputedStyle"](_0x3f00xe5)["fontSize"]["split"]("px", 2)[0];
                    _0x3f00xe5["style"]["fontSize"] = (+_0x3f00xe6 - 1) + 'px'
                })
            });
            _0x3f00xe4[0]["addEventListener"]('click', function() {
                _0x3f00xe1[0]["querySelectorAll"]('*')["forEach"](function(_0x3f00xe5) {
                    const _0x3f00xe6 = window["getComputedStyle"](_0x3f00xe5)["fontSize"]["split"]("px", 2)[0];
                    _0x3f00xe5["style"]["fontSize"] = ""
                })
            })
        };
        var _0x3f00xe7 = document["querySelectorAll"]('.qr-image');
        if (_0x3f00xe7["length"]) {
            var _0x3f00xe8 = window["location"]["href"];
            var _0x3f00xe9 = document["getElementsByClassName"]('generate-qr-auto')[0];
            var _0x3f00xea = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
            if (_0x3f00xe9) {
                _0x3f00xe9["setAttribute"]('src', _0x3f00xea + _0x3f00xe8)
            };
            var _0x3f00xeb = document["getElementsByClassName"]('generate-qr-button')[0];
            if (_0x3f00xeb) {
                _0x3f00xeb["addEventListener"]('click', function() {
                    var _0x3f00xec = document["getElementsByClassName"]('qr-url')[0]["value"];
                    var _0x3f00xea = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
                    var _0x3f00xed = '<img class=\"mx-auto polaroid-effect shadow-l mt-4 delete-qr\" width=\"200\" src=\"' + _0x3f00xea + _0x3f00xec + '\" alt=\"img\"><p class=\"font-11 text-center mb-0\">' + _0x3f00xec + '</p>';
                    document["getElementsByClassName"]('generate-qr-result')[0]["innerHTML"] = _0x3f00xed;
                    _0x3f00xeb["innerHTML"] = "Generate New Button"
                })
            }
        };
        if (window["location"]["protocol"] === "file:") {
            var _0x3f00xee = document["querySelectorAll"]('a');
            _0x3f00xee["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('mouseover', (_0x3f00x72) => {})
            })
        };
        var _0x3f00xef = document["querySelectorAll"]('[data-search]');
        if (_0x3f00xef["length"]) {
            var _0x3f00xf0 = document["querySelectorAll"]('.search-results');
            var _0x3f00xf1 = document["querySelectorAll"]('.search-no-results');
            var _0x3f00xf2 = document["querySelectorAll"](".search-results div")[0]["childElementCount"];
            var _0x3f00xf3 = document["querySelectorAll"]('.search-trending');

            function _0x3f00xf4() {
                var _0x3f00xf5 = _0x3f00xef[0]["value"];
                var _0x3f00xf6 = _0x3f00xf5["toLowerCase"]();
                if (_0x3f00xf6 != '') {
                    _0x3f00xf0[0]["classList"]["remove"]('disabled-search-list');
                    var _0x3f00xf7 = document["querySelectorAll"]('[data-filter-item]');
                    for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00xf7["length"]; _0x3f00x9++) {
                        var _0x3f00xf8 = _0x3f00xf7[_0x3f00x9]["getAttribute"]('data-filter-name');
                        if (_0x3f00xf8["includes"](_0x3f00xf6)) {
                            _0x3f00xf7[_0x3f00x9]["classList"]["remove"]('disabled');
                            if (_0x3f00xf3["length"]) {
                                _0x3f00xf3[0]["classList"]["add"]('disabled')
                            }
                        } else {
                            _0x3f00xf7[_0x3f00x9]["classList"]["add"]('disabled');
                            if (_0x3f00xf3["length"]) {
                                _0x3f00xf3[0]["classList"]["remove"]('disabled')
                            }
                        };
                        var _0x3f00xf9 = document["querySelectorAll"](".search-results div")[0]["getElementsByClassName"]("disabled")["length"];
                        if (_0x3f00xf9 === _0x3f00xf2) {
                            _0x3f00xf1[0]["classList"]["remove"]('disabled');
                            if (_0x3f00xf3["length"]) {
                                _0x3f00xf3[0]["classList"]["add"]('disabled')
                            }
                        } else {
                            _0x3f00xf1[0]["classList"]["add"]('disabled');
                            if (_0x3f00xf3["length"]) {
                                _0x3f00xf3[0]["classList"]["add"]('disabled')
                            }
                        }
                    }
                };
                if (_0x3f00xf6 === '') {
                    _0x3f00xf0[0]["classList"]["add"]('disabled-search-list');
                    _0x3f00xf1[0]["classList"]["add"]('disabled');
                    if (_0x3f00xf3["length"]) {
                        _0x3f00xf3[0]["classList"]["remove"]('disabled')
                    }
                }
            }
            _0x3f00xef[0]["addEventListener"]('keyup', function() {
                _0x3f00xf4()
            });
            _0x3f00xef[0]["addEventListener"]('click', function() {
                _0x3f00xf4()
            });
            var _0x3f00xfa = document["querySelectorAll"]('.search-trending a');
            _0x3f00xfa["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00x72) => {
                    var _0x3f00xfb = _0x3f00xb["querySelectorAll"]('span')[0]["textContent"]["toLowerCase"]();
                    _0x3f00xef[0]["value"] = _0x3f00xfb;
                    _0x3f00xef[0]["click"]()
                })
            })
        };

        function _0x3f00xfc() {
            var _0x3f00xfd = document["title"];
            var _0x3f00xfe = document["title"];
            var _0x3f00xff = window["location"]["href"];
            if (document["querySelectorAll"]('.shareToFacebook, .shareToTwitter, .shareToLinkedIn')[0]) {
                document["querySelectorAll"]('.shareToFacebook, .shareToTwitter, .shareToLinkedIn, .shareToWhatsApp, .shareToMail')["forEach"]((_0x3f00x100) => {
                    _0x3f00x100["setAttribute"]('target', '_blank')
                });
                document["querySelectorAll"]('.shareToFacebook')["forEach"]((_0x3f00x100) => {
                    return _0x3f00x100["setAttribute"]("href", "https://www.facebook.com/sharer/sharer.php?u=" + _0x3f00xff)
                });
                document["querySelectorAll"]('.shareToTwitter')["forEach"]((_0x3f00x100) => {
                    return _0x3f00x100["setAttribute"]("href", "http://twitter.com/share?text=" + _0x3f00xfd + "%20" + _0x3f00xff)
                });
                document["querySelectorAll"]('.shareToPinterest')["forEach"]((_0x3f00x100) => {
                    return _0x3f00x100["setAttribute"]("href", "https://pinterest.com/pin/create/button/?url=" + _0x3f00xff)
                });
                document["querySelectorAll"]('.shareToWhatsApp')["forEach"]((_0x3f00x100) => {
                    return _0x3f00x100["setAttribute"]("href", "whatsapp://send?text=" + _0x3f00xff)
                });
                document["querySelectorAll"]('.shareToMail')["forEach"]((_0x3f00x100) => {
                    return _0x3f00x100["setAttribute"]("href", "mailto:?body=" + _0x3f00xff)
                });
                document["querySelectorAll"]('.shareToLinkedIn')["forEach"]((_0x3f00x100) => {
                    return _0x3f00x100["setAttribute"]("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + _0x3f00xff + "&title=" + _0x3f00xfd + "&summary=&source=")
                })
            };
            if (navigator["canShare"]) {
                const _0x3f00x101 = {
                    title: _0x3f00xfd,
                    text: _0x3f00xfe,
                    url: _0x3f00xff
                };
                var _0x3f00x102 = document["querySelectorAll"]('[data-menu=\"menu-share\"], [data-show-share]');
                if (_0x3f00x102) {
                    _0x3f00x102["forEach"]((_0x3f00xb) => {
                        _0x3f00xb["addEventListener"]('click', async () => {
                            _0x3f00x3a('menu-share', 'hide', 0);
                            try {
                                await navigator["share"](_0x3f00x101)
                            } catch (err) {}
                        })
                    })
                }
            }
        }
        var _0x3f00x103 = document["querySelectorAll"]('.contact-form');
        if (_0x3f00x103["length"]) {
            var _0x3f00x104 = document["getElementById"]('contactForm');
            _0x3f00x104["onsubmit"] = function(_0x3f00xa) {
                _0x3f00xa["preventDefault"]();
                var _0x3f00x105 = document["getElementById"]('contactNameField');
                var _0x3f00x106 = document["getElementById"]('contactEmailField');
                var _0x3f00x107 = document["getElementById"]('contactMessageTextarea');
                var _0x3f00x108 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (_0x3f00x105["value"] === '') {
                    _0x3f00x104["setAttribute"]('data-form', 'invalid');
                    _0x3f00x105["classList"]["add"]('border-red-dark');
                    document["getElementById"]('validator-name')["classList"]["remove"]('disabled')
                } else {
                    _0x3f00x104["setAttribute"]('data-form', 'valid');
                    document["getElementById"]('validator-name')["classList"]["add"]('disabled');
                    _0x3f00x105["classList"]["remove"]('border-red-dark')
                };
                if (_0x3f00x106["value"] === '') {
                    _0x3f00x104["setAttribute"]('data-form', 'invalid');
                    _0x3f00x106["classList"]["add"]('border-red-dark');
                    document["getElementById"]('validator-mail1')["classList"]["remove"]('disabled')
                } else {
                    document["getElementById"]('validator-mail1')["classList"]["add"]('disabled');
                    if (!_0x3f00x108["test"](_0x3f00x106["value"])) {
                        _0x3f00x104["setAttribute"]('data-form', 'invalid');
                        _0x3f00x106["classList"]["add"]('border-red-dark');
                        document["getElementById"]('validator-mail2')["classList"]["remove"]('disabled')
                    } else {
                        _0x3f00x104["setAttribute"]('data-form', 'valid');
                        document["getElementById"]('validator-mail2')["classList"]["add"]('disabled');
                        _0x3f00x106["classList"]["remove"]('border-red-dark')
                    }
                };
                if (_0x3f00x107["value"] === '') {
                    _0x3f00x104["setAttribute"]('data-form', 'invalid');
                    _0x3f00x107["classList"]["add"]('border-red-dark');
                    document["getElementById"]('validator-text')["classList"]["remove"]('disabled')
                } else {
                    _0x3f00x104["setAttribute"]('data-form', 'valid');
                    document["getElementById"]('validator-text')["classList"]["add"]('disabled');
                    _0x3f00x107["classList"]["remove"]('border-red-dark')
                };
                if (_0x3f00x104["getAttribute"]('data-form') === 'valid') {
                    document["querySelectorAll"]('.form-sent')[0]["classList"]["remove"]('disabled');
                    document["querySelectorAll"]('.contact-form')[0]["classList"]["add"]('disabled');
                    var _0x3f00x109 = {};
                    for (let _0x3f00x9 = 0, _0x3f00x10a = _0x3f00x104["length"]; _0x3f00x9 < _0x3f00x10a; ++_0x3f00x9) {
                        let _0x3f00x10b = _0x3f00x104[_0x3f00x9];
                        if (_0x3f00x10b["name"]) {
                            _0x3f00x109[_0x3f00x10b["name"]] = _0x3f00x10b["value"]
                        }
                    };
                    var _0x3f00x10c = new XMLHttpRequest();
                    _0x3f00x10c["open"](_0x3f00x104["method"], _0x3f00x104["action"], true);
                    _0x3f00x10c["setRequestHeader"]('Accept', 'application/json; charset=utf-8');
                    _0x3f00x10c["setRequestHeader"]('Content-Type', 'application/json; charset=UTF-8');
                    _0x3f00x10c["send"](JSON["stringify"](_0x3f00x109));
                    _0x3f00x10c["onloadend"] = function(_0x3f00x10d) {
                        if (_0x3f00x10d["target"]["status"] === 200) {
                            console["log"]('Form Submitted')
                        }
                    }
                }
            }
        };
        var _0x3f00x10e = document["querySelectorAll"]('[data-bs-toggle=\"collapse\"]:not(.no-effect)');
        if (_0x3f00x10e["length"]) {
            _0x3f00x10e["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                    if (_0x3f00xb["querySelectorAll"]('i')["length"]) {
                        _0x3f00xb["querySelector"]('i')["classList"]["toggle"]('fa-rotate-180')
                    }
                })
            })
        };
        var _0x3f00x10f = document["querySelectorAll"]('.tab-controls a');
        if (_0x3f00x10f["length"]) {
            _0x3f00x10f["forEach"](function(_0x3f00xa) {
                if (_0x3f00xa["hasAttribute"]('data-active')) {
                    var _0x3f00x110 = _0x3f00xa["parentNode"]["getAttribute"]('data-highlight');
                    _0x3f00xa["classList"]["add"](_0x3f00x110);
                    _0x3f00xa["classList"]["add"]('no-click')
                }
            });
            _0x3f00x10f["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                    var _0x3f00x110 = _0x3f00xb["parentNode"]["getAttribute"]('data-highlight');
                    var _0x3f00x111 = _0x3f00xb["parentNode"]["querySelectorAll"]('a');
                    _0x3f00x111["forEach"](function(_0x3f00xa) {
                        _0x3f00xa["classList"]["remove"](_0x3f00x110);
                        _0x3f00xa["classList"]["remove"]('no-click')
                    });
                    _0x3f00xb["classList"]["add"](_0x3f00x110);
                    _0x3f00xb["classList"]["add"]('no-click')
                })
            })
        };

        function _0x3f00x3a(_0x3f00x112, _0x3f00x33, _0x3f00x42) {
            setTimeout(function() {
                if (_0x3f00x33 === "show") {
                    return document["getElementById"](_0x3f00x112)["classList"]["add"]('menu-active'), document["querySelectorAll"]('.menu-hider')[0]["classList"]["add"]('menu-active')
                } else {
                    return document["getElementById"](_0x3f00x112)["classList"]["remove"]('menu-active'), document["querySelectorAll"]('.menu-hider')[0]["classList"]["remove"]('menu-active')
                }
            }, _0x3f00x42)
        }
        var _0x3f00x113 = document["querySelectorAll"]('[data-auto-activate]');
        if (_0x3f00x113["length"]) {
            var _0x3f00x114 = _0x3f00x113[0]["getAttribute"]('data-auto-activate');
            var _0x3f00x115 = _0x3f00x114 * 1000;
            setTimeout(function() {
                _0x3f00x113[0]["classList"]["add"]('menu-active');
                _0x3f00xc[0]["classList"]["add"]('menu-active')
            }, _0x3f00x115)
        };
        var _0x3f00x116 = document["getElementById"]('copyright-year');
        if (_0x3f00x116) {
            var _0x3f00x117 = new Date();
            const _0x3f00x118 = _0x3f00x117["getFullYear"]();
            _0x3f00x116["textContent"] = _0x3f00x118
        };
        var _0x3f00x119 = document["querySelectorAll"]('.check-age');
        if (_0x3f00x119["length"]) {
            _0x3f00x119[0]["addEventListener"]('click', function() {
                var _0x3f00x11a = document["querySelectorAll"]("#date-birth-day")[0]["value"];
                var _0x3f00x11b = document["querySelectorAll"]("#date-birth-month")[0]["value"];
                var _0x3f00x11c = document["querySelectorAll"]("#date-birth-year")[0]["value"];
                var _0x3f00x11d = 18;
                var _0x3f00x11e = new Date();
                _0x3f00x11e["setFullYear"](_0x3f00x11c, _0x3f00x11b - 1, _0x3f00x11a);
                var _0x3f00x11f = new Date();
                var _0x3f00x120 = new Date();
                _0x3f00x120["setFullYear"](_0x3f00x11e["getFullYear"]() + _0x3f00x11d, _0x3f00x11b - 1, _0x3f00x11a);
                var _0x3f00x121 = document["querySelectorAll"]('#menu-age');
                var _0x3f00x122 = document["querySelectorAll"]('#menu-age-fail');
                var _0x3f00x123 = document["querySelectorAll"]('#menu-age-okay');
                console["log"](_0x3f00x11f);
                console["log"](_0x3f00x120);
                console["log"](_0x3f00x11b);
                if ((_0x3f00x11f - _0x3f00x120) > 0) {
                    console["log"]("above 18");
                    _0x3f00x121[0]["classList"]["remove"]('menu-active');
                    _0x3f00x123[0]["classList"]["add"]('menu-active')
                } else {
                    _0x3f00x121[0]["classList"]["remove"]('menu-active');
                    _0x3f00x122[0]["classList"]["add"]('menu-active')
                };
                return true
            })
        };
        var _0x3f00x124 = document["querySelectorAll"]('[data-menu-load]');
        _0x3f00x124["forEach"](function(_0x3f00xa) {
            var _0x3f00x125 = _0x3f00xa["getAttribute"]('data-menu-load');
            fetch(_0x3f00x125)["then"]((_0x3f00x109) => {
                return _0x3f00x109["text"]()
            })["then"]((_0x3f00x126) => {
                return _0x3f00xa["innerHTML"] = _0x3f00x126
            })["then"]((_0x3f00x109) => {
                setTimeout(function() {
                    if (_0x3f00x124[_0x3f00x124["length"] - 1] === _0x3f00xa) {
                        _0x3f00x33();
                        _0x3f00x63();
                        _0x3f00x44();
                        _0x3f00xfc();
                        _0x3f00x5a();
                        _0x3f00x58();
                        _0x3f00x4f();
                        _0x3f00x48()
                    }
                }, 500)
            })
        });
        let _0x3f00x127 = {
            Android: function() {
                return navigator["userAgent"]["match"](/Android/i)
            },
            iOS: function() {
                return navigator["userAgent"]["match"](/iPhone|iPad|iPod/i)
            },
            any: function() {
                return (_0x3f00x127.Android() || _0x3f00x127["iOS"]())
            }
        };
        const _0x3f00x128 = document["getElementsByClassName"]('show-android');
        const _0x3f00x129 = document["getElementsByClassName"]('show-ios');
        const _0x3f00x12a = document["getElementsByClassName"]('show-no-device');
        if (!_0x3f00x127["any"]()) {
            for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x129["length"]; _0x3f00x9++) {
                _0x3f00x129[_0x3f00x9]["classList"]["add"]('disabled')
            };
            for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x128["length"]; _0x3f00x9++) {
                _0x3f00x128[_0x3f00x9]["classList"]["add"]('disabled')
            }
        };
        if (_0x3f00x127["iOS"]()) {
            document["querySelectorAll"]('#page')[0]["classList"]["add"]('device-is-ios');
            for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x12a["length"]; _0x3f00x9++) {
                _0x3f00x12a[_0x3f00x9]["classList"]["add"]('disabled')
            };
            for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x128["length"]; _0x3f00x9++) {
                _0x3f00x128[_0x3f00x9]["classList"]["add"]('disabled')
            }
        };
        if (_0x3f00x127.Android()) {
            document["querySelectorAll"]('#page')[0]["classList"]["add"]('device-is-android');
            for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x129["length"]; _0x3f00x9++) {
                _0x3f00x129[_0x3f00x9]["classList"]["add"]('disabled')
            };
            for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x12a["length"]; _0x3f00x9++) {
                _0x3f00x12a[_0x3f00x9]["classList"]["add"]('disabled')
            }
        };
        var _0x3f00x12b = document["querySelectorAll"]('.offline-message');
        if (!_0x3f00x12b["length"]) {
            const _0x3f00x12c = document["createElement"]('p');
            const _0x3f00x12d = document["createElement"]('p');
            _0x3f00x12c["className"] = 'offline-message bg-red-dark color-white';
            _0x3f00x12c["textContent"] = 'No internet connection detected';
            _0x3f00x12d["className"] = 'online-message bg-green-dark color-white';
            _0x3f00x12d["textContent"] = 'You are back online';
            document["getElementsByTagName"]('body')[0]["appendChild"](_0x3f00x12c);
            document["getElementsByTagName"]('body')[0]["appendChild"](_0x3f00x12d)
        };

        function _0x3f00x12e() {
            var _0x3f00x12f = document["querySelectorAll"]('.show-offline');
            _0x3f00x12f["forEach"]((_0x3f00xb) => {
                return _0x3f00xb["addEventListener"]('click', (_0x3f00x72) => {
                    document["getElementsByClassName"]('offline-message')[0]["classList"]["add"]('offline-message-active');
                    setTimeout(function() {
                        document["getElementsByClassName"]('offline-message')[0]["classList"]["remove"]('offline-message-active')
                    }, 1500)
                })
            })
        }

        function _0x3f00x130() {
            var _0x3f00x131 = document["querySelectorAll"]('[data-link]');
            _0x3f00x131["forEach"](function(_0x3f00xa) {
                var _0x3f00x132 = _0x3f00xa["getAttribute"]('data-link');
                if (_0x3f00x132["match"](/.html/)) {
                    _0x3f00xa["setAttribute"]('href', _0x3f00x132);
                    _0x3f00xa["removeAttribute"]('data-link', '')
                }
            })
        }
        var _0x3f00x133 = document["getElementsByClassName"]('offline-message')[0];
        var _0x3f00x134 = document["getElementsByClassName"]('online-message')[0];

        function _0x3f00x135() {
            _0x3f00x130();
            _0x3f00x134["classList"]["add"]('online-message-active');
            setTimeout(function() {
                _0x3f00x134["classList"]["remove"]('online-message-active')
            }, 2000);
            console["info"]('Connection: Online')
        }

        function _0x3f00x136() {
            _0x3f00x12e();
            _0x3f00x133["classList"]["add"]('offline-message-active');
            setTimeout(function() {
                _0x3f00x133["classList"]["remove"]('offline-message-active')
            }, 2000);
            console["info"]('Connection: Offline')
        }
        var _0x3f00x137 = document["querySelectorAll"]('.simulate-offline');
        var _0x3f00x138 = document["querySelectorAll"]('.simulate-online');
        if (_0x3f00x137["length"]) {
            _0x3f00x137[0]["addEventListener"]('click', function() {
                _0x3f00x136()
            });
            _0x3f00x138[0]["addEventListener"]('click', function() {
                _0x3f00x135()
            })
        };

        function _0x3f00x139(_0x3f00x72) {
            var _0x3f00x13a = navigator["onLine"] ? "online" : "offline";
            _0x3f00x135()
        }

        function _0x3f00x13b(_0x3f00x72) {
            _0x3f00x136()
        }
        window["addEventListener"]('online', _0x3f00x139);
        window["addEventListener"]('offline', _0x3f00x13b);
        const _0x3f00x13c = document["querySelectorAll"]('.simulate-iphone-badge');
        _0x3f00x13c["forEach"]((_0x3f00xb) => {
            return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                document["getElementsByClassName"]('add-to-home')[0]["classList"]["add"]('add-to-home-visible', 'add-to-home-ios');
                document["getElementsByClassName"]('add-to-home')[0]["classList"]["remove"]('add-to-home-android')
            })
        });
        const _0x3f00x13d = document["querySelectorAll"]('.simulate-android-badge');
        _0x3f00x13d["forEach"]((_0x3f00xb) => {
            return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                document["getElementsByClassName"]('add-to-home')[0]["classList"]["add"]('add-to-home-visible', 'add-to-home-android');
                document["getElementsByClassName"]('add-to-home')[0]["classList"]["remove"]('add-to-home-ios')
            })
        });
        const _0x3f00x13e = document["querySelectorAll"]('.add-to-home');
        _0x3f00x13e["forEach"]((_0x3f00xb) => {
            return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                document["getElementsByClassName"]('add-to-home')[0]["classList"]["remove"]('add-to-home-visible')
            })
        });
        if (_0x3f00x1 === true) {
            var _0x3f00x13f = document["getElementsByTagName"]('html')[0];
            if (!_0x3f00x13f["classList"]["contains"]('isPWA')) {
                if ('serviceWorker' in navigator) {
                    window["addEventListener"]('load', function() {
                        navigator["serviceWorker"]["register"](_0x3f00x7, {
                            scope: _0x3f00x6
                        })["then"](function(_0x3f00x140) {
                            _0x3f00x140["update"]()
                        })
                    })
                };
                var _0x3f00x141 = _0x3f00x4 * 24;
                var _0x3f00xbf = Date["now"]();
                var _0x3f00x142 = localStorage["getItem"](_0x3f00x3 + '-PWA-Timeout-Value');
                if (_0x3f00x142 == null) {
                    localStorage["setItem"](_0x3f00x3 + '-PWA-Timeout-Value', _0x3f00xbf)
                } else {
                    if (_0x3f00xbf - _0x3f00x142 > _0x3f00x141 * 60 * 60 * 1000) {
                        localStorage["removeItem"](_0x3f00x3 + '-PWA-Prompt');
                        localStorage["setItem"](_0x3f00x3 + '-PWA-Timeout-Value', _0x3f00xbf)
                    }
                };
                const _0x3f00x143 = document["querySelectorAll"]('.pwa-dismiss');
                _0x3f00x143["forEach"]((_0x3f00xb) => {
                    return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                        const _0x3f00x144 = document["querySelectorAll"]('#menu-install-pwa-android, #menu-install-pwa-ios');
                        for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x144["length"]; _0x3f00x9++) {
                            _0x3f00x144[_0x3f00x9]["classList"]["remove"]('menu-active')
                        };
                        localStorage["setItem"](_0x3f00x3 + '-PWA-Timeout-Value', _0x3f00xbf);
                        localStorage["setItem"](_0x3f00x3 + '-PWA-Prompt', 'install-rejected');
                        console["log"]('PWA Install Rejected. Will Show Again in ' + (_0x3f00x4) + ' Days')
                    })
                });
                const _0x3f00x144 = document["querySelectorAll"]('#menu-install-pwa-android, #menu-install-pwa-ios');
                if (_0x3f00x144["length"]) {
                    if (_0x3f00x127.Android()) {
                        if (localStorage["getItem"](_0x3f00x3 + '-PWA-Prompt') != "install-rejected") {
                            function _0x3f00x145() {
                                setTimeout(function() {
                                    if (!window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                                        console["log"]('Triggering PWA Window for Android');
                                        document["getElementById"]('menu-install-pwa-android')["classList"]["add"]('menu-active');
                                        document["querySelectorAll"]('.menu-hider')[0]["classList"]["add"]('menu-active')
                                    }
                                }, 3500)
                            }
                            var _0x3f00x146;
                            window["addEventListener"]('beforeinstallprompt', (_0x3f00xa) => {
                                _0x3f00xa["preventDefault"]();
                                _0x3f00x146 = _0x3f00xa;
                                _0x3f00x145()
                            })
                        };
                        const _0x3f00x147 = document["querySelectorAll"]('.pwa-install');
                        _0x3f00x147["forEach"]((_0x3f00xb) => {
                            return _0x3f00xb["addEventListener"]('click', (_0x3f00xa) => {
                                _0x3f00x146["prompt"]();
                                _0x3f00x146["userChoice"]["then"]((_0x3f00x148) => {
                                    if (_0x3f00x148["outcome"] === 'accepted') {
                                        console["log"]('Added')
                                    } else {
                                        localStorage["setItem"](_0x3f00x3 + '-PWA-Timeout-Value', _0x3f00xbf);
                                        localStorage["setItem"](_0x3f00x3 + '-PWA-Prompt', 'install-rejected');
                                        setTimeout(function() {
                                            if (!window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                                                document["getElementById"]('menu-install-pwa-android')["classList"]["remove"]('menu-active');
                                                document["querySelectorAll"]('.menu-hider')[0]["classList"]["remove"]('menu-active')
                                            }
                                        }, 50)
                                    };
                                    _0x3f00x146 = null
                                })
                            })
                        });
                        window["addEventListener"]('appinstalled', (_0x3f00x149) => {
                            document["getElementById"]('menu-install-pwa-android')["classList"]["remove"]('menu-active');
                            document["querySelectorAll"]('.menu-hider')[0]["classList"]["remove"]('menu-active')
                        })
                    };
                    if (_0x3f00x127["iOS"]()) {
                        if (localStorage["getItem"](_0x3f00x3 + '-PWA-Prompt') != "install-rejected") {
                            setTimeout(function() {
                                if (!window["matchMedia"]('(display-mode: fullscreen)')["matches"]) {
                                    console["log"]('Triggering PWA Window for iOS');
                                    document["getElementById"]('menu-install-pwa-ios')["classList"]["add"]('menu-active');
                                    document["querySelectorAll"]('.menu-hider')[0]["classList"]["add"]('menu-active')
                                }
                            }, 3500)
                        }
                    }
                }
            };
            _0x3f00x13f["setAttribute"]('class', 'isPWA')
        };
        if (_0x3f00x5 === true) {
            caches["delete"]('workbox-runtime')["then"](function() {});
            sessionStorage["clear"]();
            caches["keys"]()["then"]((_0x3f00x14a) => {
                _0x3f00x14a["forEach"]((_0x3f00x14b) => {
                    caches["delete"](_0x3f00x14b)
                })
            })
        };
        var _0x3f00x14c = new LazyLoad();
        var _0x3f00x14d, _0x3f00x14e, _0x3f00x14f, _0x3f00x150;
        var _0x3f00x151 = "plugins/";
        let _0x3f00x152 = [{
            id: 'uniqueID',
            plug: 'pluginName/plugin.js',
            call: 'pluginName/pluginName-call.js',
            style: 'pluginName/pluginName-style.css',
            trigger: '.pluginTriggerClass'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-charts.js',
            trigger: '.chart'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-wallet.js',
            trigger: '.wallet-chart'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-dashboard.js',
            trigger: '.dashboard-chart'
        }, {
            id: 'graph',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-graphs.js',
            trigger: '.graph'
        }, {
            id: 'count',
            plug: 'countdown/countdown.js',
            trigger: '.countdown'
        }, {
            id: 'gallery',
            plug: 'glightbox/glightbox.js',
            call: 'glightbox/glightbox-call.js',
            style: 'glightbox/glightbox.css',
            trigger: '[data-gallery]'
        }, {
            id: 'gallery-views',
            plug: 'galleryViews/gallery-views.js',
            trigger: '.gallery-view-controls'
        }, {
            id: 'filter',
            plug: 'filterizr/filterizr.js',
            call: 'filterizr/filterizr-call.js',
            style: 'filterizr/filterizr.css',
            trigger: '.gallery-filter'
        }, {
            id: 'embedly',
            plug: 'embedly/embedly.js',
            trigger: '.embedly-card'
        }];
        for (let _0x3f00x9 = 0; _0x3f00x9 < _0x3f00x152["length"]; _0x3f00x9++) {
            if (document["querySelectorAll"]('.' + _0x3f00x152[_0x3f00x9]["id"] + '-c')["length"]) {
                document["querySelectorAll"]('.' + _0x3f00x152[_0x3f00x9]["id"] + '-c')[0]["remove"]()
            };
            var _0x3f00x153 = document["querySelectorAll"](_0x3f00x152[_0x3f00x9]["trigger"]);
            if (_0x3f00x153["length"]) {
                var _0x3f00x154 = document["getElementsByTagName"]('script')[1],
                    _0x3f00x155 = document["createElement"]('script');
                _0x3f00x155["type"] = 'text/javascript';
                _0x3f00x155["className"] = _0x3f00x152[_0x3f00x9]["id"] + '-p';
                _0x3f00x155["src"] = _0x3f00x151 + _0x3f00x152[_0x3f00x9]["plug"];
                _0x3f00x155["addEventListener"]('load', function() {
                    if (_0x3f00x152[_0x3f00x9]["call"] !== undefined) {
                        var _0x3f00x156 = document["getElementsByTagName"]('script')[2],
                            _0x3f00x157 = document["createElement"]('script');
                        _0x3f00x157["type"] = 'text/javascript';
                        _0x3f00x157["className"] = _0x3f00x152[_0x3f00x9]["id"] + '-c';
                        _0x3f00x157["src"] = _0x3f00x151 + _0x3f00x152[_0x3f00x9]["call"];
                        _0x3f00x156["parentNode"]["insertBefore"](_0x3f00x157, _0x3f00x156)
                    }
                });
                if (!document["querySelectorAll"]('.' + _0x3f00x152[_0x3f00x9]["id"] + '-p')["length"]) {
                    _0x3f00x154["parentNode"]["insertBefore"](_0x3f00x155, _0x3f00x154)
                } else {
                    setTimeout(function() {
                        var _0x3f00x154 = document["getElementsByTagName"]('script')[1],
                            _0x3f00x155 = document["createElement"]('script');
                        _0x3f00x155["type"] = 'text/javascript';
                        _0x3f00x155["className"] = _0x3f00x152[_0x3f00x9]["id"] + '-c';
                        _0x3f00x155["src"] = _0x3f00x151 + _0x3f00x152[_0x3f00x9]["call"];
                        _0x3f00x154["parentNode"]["insertBefore"](_0x3f00x155, _0x3f00x154)
                    }, 50)
                };
                if (_0x3f00x152[_0x3f00x9]["style"] !== undefined) {
                    if (!document["querySelectorAll"]('.' + _0x3f00x152[_0x3f00x9]["id"] + '-s')["length"]) {
                        var _0x3f00x158 = document["createElement"]("link");
                        _0x3f00x158["className"] = _0x3f00x152[_0x3f00x9]["id"] + '-s';
                        _0x3f00x158["rel"] = "stylesheet";
                        _0x3f00x158["type"] = "text/css";
                        _0x3f00x158["href"] = _0x3f00x151 + _0x3f00x152[_0x3f00x9]["style"];
                        document["getElementsByTagName"]("head")[0]["appendChild"](_0x3f00x158)
                    }
                }
            }
        }
    }
    if ('scrollRestoration' in window["history"]) {
        window["history"]["scrollRestoration"] = 'manual'
    };
    if (_0x3f00x2 === true) {
        if (window["location"]["protocol"] !== "file:") {
            const _0x3f00x159 = {
                containers: ["#page"],
                cache: false,
                animateHistoryBrowsing: false,
                plugins: [new SwupPreloadPlugin()],
                linkSelector: 'a:not(.external-link):not(.default-link):not([href^=\"https\"]):not([href^=\"http\"]):not([data-gallery])'
            };
            const _0x3f00x15a = new Swup(_0x3f00x159);
            document["addEventListener"]('swup:pageView', (_0x3f00xa) => {
                _0x3f00x8()
            })
        }
    };
    _0x3f00x8()
})