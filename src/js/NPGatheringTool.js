/*!
GPII N/P Gathering tool.

Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function ($, fluid) {

    "use strict";

    fluid.registerNamespace("gpii.NPGatheringTool");

    gpii.NPGatheringTool.configParser = {
        parse: fluid.pathUtil.parseEL,
        compose: fluid.pathUtil.composePath
    };

    gpii.NPGatheringTool.resolverGetConfig = {
        parser: gpii.NPGatheringTool.configParser,
        strategies: [fluid.model.defaultFetchStrategy]
    };

    gpii.NPGatheringTool.resolverSetConfig = {
        parser: gpii.NPGatheringTool.configParser,
        strategies: [fluid.model.defaultFetchStrategy, fluid.model.defaultCreatorStrategy]
    };

    fluid.defaults("gpii.NPGatheringTool", {
        gradeNames: ["autoInit", "fluid.rendererComponent"],
        mergePolicy: {
            // TODO: This should go away once we update to the latest infusion that has a fix
            // for FLUID-4935.
            "changeApplierOptions.resolverSetConfig": "resolverSetConfig"
        },
        strings: {
            save: "Save",
            label: "N/P Gathering Tool",
            notes: "Notes",
            tokenLabel: "Token",
            missingToken: "User token is missing.",
            linuxGroupLabel: "Linux",
            windowsGroupLabel: "Windows",
            orcaGroupLabel: "Orca",
            gnomeGroupLabel: "Universal Access Settings",
            easeOfAccessGroupLabel: "Ease of Access Center",
            a11yGroupLabel: "GNOME Magnifier",
            nvdaGroupLabel: "NVDA",
            magnifierGroupLabel: "Magnifier",
            "orca.voice.default.familyLabel": "Person (TTS language)",
            "orca.voice.default.rateLabel": "Voice Default Rate",
            "orca.enableTutorialMessagesLabel": "Enable Tutorial Messages",
            "orca.enableEchoByCharacterLabel": "Enable Echo by Character",
            "orca.enableEchoByWordLabel": "Enable Echo by Word",
            "orca.enableBrailleLabel": "Enable Braille",
            "orca.verbalizePunctuationStyleLabel": "Verbalize Punctuation Style",
            "orca.sayAllStyleLabel": "Say All Style",
            "orca.enableSpeechLabel": "Enable Speech",
            "desktop.gtk-themeLabel": "GTK Theme",
            "desktop.icon-themeLabel": "Icon Theme",
            "desktop.text-scaling-factorLabel": "Text Scaling Factor",
            "desktop.cursor-sizeLabel": "Cursor Size",
            "desktop.mag-factorLabel": "Magnification Factor",
            "desktop.screen-positionLabel": "Screen Position",
            "desktop.show-cross-hairsLabel": "Show Cross Hairs",
            "nvda.speech.espeak.voiceLabel": "Voice",
            "nvda.speech.espeak.rateLabel": "Rate",
            "nvda.speech.espeak.rateBoostLabel": "Rate Boost",
            "nvda.reviewCursor.followFocusLabel": "Follow Focus",
            "nvda.reviewCursor.followCaretLabel": "Follow Caret",
            "nvda.reviewCursor.followMouseLabel": "Follow Mouse",
            "nvda.presentation.reportHelpBalloonsLabel": "Report Help Balloons",
            "nvda.keyboard.speakTypedCharactersLabel": "Speak Typed Characters",
            "nvda.keyboard.speakTypedWordsLabel": "Speak Typed Words",
            "nvda.speech.espeak.sayCapForCapitalsLabel": "Say 'Cap' For Capitals",
            "nvda.speech.symbolLevelLabel": "Punctuation/symbol level",
            "nvda.virtualBuffers.autoSayAllOnPageLoadLabel": "Say All On Page Load",
            "nvda.speech.synthLabel": "Speech Synth",
            "nvda.speech.outputDeviceLabel": "Output Device",
            "desktop.highContrastOnLabel": "High Contrast",
            "desktop.cursorsLabel": "Cursor",
            "magnifier.MagnificationLabel": "Zoom level",
            "magnifier.FollowFocusLabel": "Follow the keyboard focus",
            "magnifier.FollowCaretLabel": "Follow the text insertion point",
            "magnifier.FollowMouseLabel": "Follow the mouser pointer",
            "magnifier.MagnificationModeLabel": "Magnifier Mode"
        },
        selectors: {
            save: ".gpii-NPGatheringTool-save",

            tokenLabel: ".gpii-NPGatheringTool-token-label",
            token: ".gpii-NPGatheringTool-token",
            notesLabel: ".gpii-NPGatheringTool-notes-label",
            notes: ".gpii-NPGatheringTool-notes",

            label: ".gpii-NPGatheringTool-label",
            linuxGroupLabel: ".gpii-NPGatheringTool-linuxGroupLabel",
            orcaGroupLabel: ".gpii-NPGatheringTool-orcaGroupLabel",
            gnomeGroupLabel: ".gpii-NPGatheringTool-gnomeGroupLabel",
            easeOfAccessGroupLabel: ".gpii-NPGatheringTool-easeOfAccessGroupLabel",
            a11yGroupLabel: ".gpii-NPGatheringTool-a11yGroupLabel",
            windowsGroupLabel: ".gpii-NPGatheringTool-windowsGroupLabel",
            nvdaGroupLabel: ".gpii-NPGatheringTool-nvdaGroupLabel",
            magnifierGroupLabel: ".gpii-NPGatheringTool-magnifierGroupLabel",

            "orca.voice.default.family": ".gpii-NPGatheringTool-orca-voice-default-family",
            "orca.voice.default.familyLabel": ".gpii-NPGatheringTool-orca-voice-default-familyLabel",
            "orca.voice.default.rate": ".gpii-NPGatheringTool-orca-voice-default-rate",
            "orca.voice.default.rateLabel": ".gpii-NPGatheringTool-orca-voice-default-rateLabel",
            "orca.enableTutorialMessages": ".gpii-NPGatheringTool-orca-enableTutorialMessages",
            "orca.enableTutorialMessagesLabel": ".gpii-NPGatheringTool-orca-enableTutorialMessagesLabel",
            "orca.enableEchoByCharacter": ".gpii-NPGatheringTool-orca-enableEchoByCharacter",
            "orca.enableEchoByCharacterLabel": ".gpii-NPGatheringTool-orca-enableEchoByCharacterLabel",
            "orca.enableEchoByWord": ".gpii-NPGatheringTool-orca-enableEchoByWord",
            "orca.enableEchoByWordLabel": ".gpii-NPGatheringTool-orca-enableEchoByWordLabel",
            "orca.enableBraille": ".gpii-NPGatheringTool-orca-enableBraille",
            "orca.enableBrailleLabel": ".gpii-NPGatheringTool-orca-enableBrailleLabel",
            "orca.verbalizePunctuationStyle": ".gpii-NPGatheringTool-orca-verbalizePunctuationStyle",
            "orca.verbalizePunctuationStyleLabel": ".gpii-NPGatheringTool-orca-verbalizePunctuationStyleLabel",
            "orca.sayAllStyle": ".gpii-NPGatheringTool-orca-sayAllStyle",
            "orca.sayAllStyleLabel": ".gpii-NPGatheringTool-orca-sayAllStyleLabel",
            "orca.enableSpeech": ".gpii-NPGatheringTool-orca-enableSpeech",
            "orca.enableSpeechLabel": ".gpii-NPGatheringTool-orca-enableSpeechLabel",
            "desktop.gtk-theme": ".gpii-NPGatheringTool-desktop-gtk-theme",
            "desktop.gtk-themeLabel": ".gpii-NPGatheringTool-desktop-gtk-themeLabel",
            "desktop.icon-theme": ".gpii-NPGatheringTool-desktop-icon-theme",
            "desktop.icon-themeLabel": ".gpii-NPGatheringTool-desktop-icon-themeLabel",
            "desktop.text-scaling-factor": ".gpii-NPGatheringTool-desktop-text-scaling-factor",
            "desktop.text-scaling-factorLabel": ".gpii-NPGatheringTool-desktop-text-scaling-factorLabel",
            "desktop.cursor-size": ".gpii-NPGatheringTool-desktop-cursor-size",
            "desktop.cursor-sizeLabel": ".gpii-NPGatheringTool-desktop-cursor-sizeLabel",
            "desktop.mag-factor": ".gpii-NPGatheringTool-desktop-mag-factor",
            "desktop.mag-factorLabel": ".gpii-NPGatheringTool-desktop-mag-factorLabel",
            "desktop.screen-position": ".gpii-NPGatheringTool-desktop-screen-position",
            "desktop.screen-positionLabel": ".gpii-NPGatheringTool-desktop-screen-positionLabel",
            "desktop.show-cross-hairs": ".gpii-NPGatheringTool-desktop-show-cross-hairs",
            "desktop.show-cross-hairsLabel": ".gpii-NPGatheringTool-desktop-show-cross-hairsLabel",

            "nvda.speech.espeak.voice": ".gpii-NPGatheringTool-nvda-speech-espeak-voice",
            "nvda.speech.espeak.voiceLabel": ".gpii-NPGatheringTool-nvda-speech-espeak-voiceLabel",
            "nvda.speech.espeak.rate": ".gpii-NPGatheringTool-nvda-speech-espeak-rate",
            "nvda.speech.espeak.rateLabel": ".gpii-NPGatheringTool-nvda-speech-espeak-rateLabel",
            "nvda.speech.espeak.rateBoost": ".gpii-NPGatheringTool-nvda-speech-espeak-rateBoost",
            "nvda.speech.espeak.rateBoostLabel": ".gpii-NPGatheringTool-nvda-speech-espeak-rateBoostLabel",
            "nvda.reviewCursor.followFocus": ".gpii-NPGatheringTool-nvda-reviewCursor-followFocus",
            "nvda.reviewCursor.followFocusLabel": ".gpii-NPGatheringTool-nvda-reviewCursor-followFocusLabel",
            "nvda.reviewCursor.followCaret": ".gpii-NPGatheringTool-nvda-reviewCursor-followCaret",
            "nvda.reviewCursor.followCaretLabel": ".gpii-NPGatheringTool-nvda-reviewCursor-followCaretLabel",
            "nvda.reviewCursor.followMouse": ".gpii-NPGatheringTool-nvda-reviewCursor-followMouse",
            "nvda.reviewCursor.followMouseLabel": ".gpii-NPGatheringTool-nvda-reviewCursor-followMouseLabel",
            "nvda.presentation.reportHelpBalloons": ".gpii-NPGatheringTool-nvda-presentation-reportHelpBalloons",
            "nvda.presentation.reportHelpBalloonsLabel": ".gpii-NPGatheringTool-nvda-presentation-reportHelpBalloonsLabel",
            "nvda.keyboard.speakTypedCharacters": ".gpii-NPGatheringTool-nvda-keyboard-speakTypedCharacters",
            "nvda.keyboard.speakTypedCharactersLabel": ".gpii-NPGatheringTool-nvda-keyboard-speakTypedCharactersLabel",
            "nvda.keyboard.speakTypedWords": ".gpii-NPGatheringTool-nvda-keyboard-speakTypedWords",
            "nvda.keyboard.speakTypedWordsLabel": ".gpii-NPGatheringTool-nvda-keyboard-speakTypedWordsLabel",
            "nvda.speech.espeak.sayCapForCapitals": ".gpii-NPGatheringTool-nvda-speech-espeak-sayCapForCapitals",
            "nvda.speech.espeak.sayCapForCapitalsLabel": ".gpii-NPGatheringTool-nvda-speech-espeak-sayCapForCapitalsLabel",
            "nvda.speech.symbolLevel": ".gpii-NPGatheringTool-nvda-speech-symbolLevel",
            "nvda.speech.symbolLevelLabel": ".gpii-NPGatheringTool-nvda-speech-symbolLevelLabel",
            "nvda.virtualBuffers.autoSayAllOnPageLoad": ".gpii-NPGatheringTool-nvda-virtualBuffers-autoSayAllOnPageLoad",
            "nvda.virtualBuffers.autoSayAllOnPageLoadLabel": ".gpii-NPGatheringTool-nvda-virtualBuffers-autoSayAllOnPageLoadLabel",
            "nvda.speech.synth": ".gpii-NPGatheringTool-nvda-speech-synth",
            "nvda.speech.synthLabel": ".gpii-NPGatheringTool-nvda-speech-synthLabel",
            "nvda.speech.outputDevice": ".gpii-NPGatheringTool-nvda-speech-outputDevice",
            "nvda.speech.outputDeviceLabel": ".gpii-NPGatheringTool-nvda-speech-outputDeviceLabel",
            "desktop.highContrastOn": ".gpii-NPGatheringTool-desktop-highContrastOn",
            "desktop.highContrastOnLabel": ".gpii-NPGatheringTool-desktop-highContrastOnLabel",
            "desktop.cursors": ".gpii-NPGatheringTool-desktop-cursors",
            "desktop.cursorsLabel": ".gpii-NPGatheringTool-desktop-cursorsLabel",
            "magnifier.Magnification": ".gpii-NPGatheringTool-magnifier-Magnification",
            "magnifier.MagnificationLabel": ".gpii-NPGatheringTool-magnifier-MagnificationLabel",
            "magnifier.FollowFocus": ".gpii-NPGatheringTool-magnifier-FollowFocus",
            "magnifier.FollowFocusLabel": ".gpii-NPGatheringTool-magnifier-FollowFocusLabel",
            "magnifier.FollowCaret": ".gpii-NPGatheringTool-magnifier-FollowCaret",
            "magnifier.FollowCaretLabel": ".gpii-NPGatheringTool-magnifier-FollowCaretLabel",
            "magnifier.FollowMouse": ".gpii-NPGatheringTool-magnifier-FollowMouse",
            "magnifier.FollowMouseLabel": ".gpii-NPGatheringTool-magnifier-FollowMouseLabel",
            "magnifier.MagnificationMode": ".gpii-NPGatheringTool-magnifier-MagnificationMode",
            "magnifier.MagnificationModeLabel": ".gpii-NPGatheringTool-magnifier-MagnificationModeLabel"
        },
        model: {
            token: "",
            voicesDefaultFamily: {
                valuelist: ["english", "german", "greek", "spanish"],
                selection: "english",
                values: {
                    english: {
                        locale: "en",
                        name: "english"
                    },
                    german: {
                        locale: "de",
                        name: "german"
                    },
                    greek: {
                        locale: "el",
                        name: "greek"
                    },
                    spanish: {
                        locale: "es",
                        name: "spanish"
                    }
                }
            },
            speechEspeakVoiceNames: ["english", "german", "greek", "spanish"],
            speechEspeakVoiceValues: ["en\\en", "de", "el", "es"],
            "gtk-themeValues": ["HighContrast", "Adwaita"],
            "icon-themeValues": ["HighContrast", "gnome"],
            "screen-positionValues": ["full-screen", "left-half", "right-half", "top-half", "bottom-half"],
            speechSynthNames: ["Disabled", "Enabled"],
            speechSynthValues: ["silence", "espeak"],
            outputDeviceNames: ["Disabled", "Enabled"],
            outputDeviceValues: ["none", "Microsoft Sound Mapper"],
            magnificationModeNames: ["Dock", "Full Screen", "Lens"],
            magnificationModeValues: [1, 2, 3],
            cursors: {
                valuelist: ["Normal", "Large", "Extra Large"],
                selection: "Normal",
                values: {
                    Normal: {
                        "No": {
                            "value": "%SystemRoot%\\cursors\\aero_unavail.cur",
                            "dataType": "REG_SZ"
                        },
                        "Hand": {
                            "value": "%SystemRoot%\\cursors\\aero_link.cur",
                            "dataType": "REG_SZ"
                        },
                        "Help": {
                            "value": "%SystemRoot%\\cursors\\aero_helpsel.cur",
                            "dataType": "REG_SZ"
                        },
                        "Wait": {
                            "value": "%SystemRoot%\\cursors\\aero_busy.ani",
                            "dataType": "REG_SZ"
                        },
                        "Arrow": {
                            "value": "%SystemRoot%\\cursors\\aero_arrow.cur",
                            "dataType": "REG_SZ"
                        },
                        "NWPen": {
                            "value": "%SystemRoot%\\cursors\\aero_pen.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNS": {
                            "value": "%SystemRoot%\\cursors\\aero_ns.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeWE": {
                            "value": "%SystemRoot%\\cursors\\aero_ew.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeAll": {
                            "value": "%SystemRoot%\\cursors\\aero_move.cur",
                            "dataType": "REG_SZ"
                        },
                        "UpArrow": {
                            "value": "%SystemRoot%\\cursors\\aero_up.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNESW": {
                            "value": "%SystemRoot%\\cursors\\aero_nesw.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNWSE": {
                            "value": "%SystemRoot%\\cursors\\aero_nwse.cur",
                            "dataType": "REG_SZ"
                        },
                        "AppStarting": {
                            "value": "%SystemRoot%\\cursors\\aero_working.ani",
                            "dataType": "REG_SZ"
                        }
                    },
                    Large: {
                        "No": {
                            "value": "%SystemRoot%\\cursors\\aero_unavail_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "Hand": {
                            "value": "%SystemRoot%\\cursors\\aero_link_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "Help": {
                            "value": "%SystemRoot%\\cursors\\aero_helpsel_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "Wait": {
                            "value": "%SystemRoot%\\cursors\\aero_busy_l.ani",
                            "dataType": "REG_SZ"
                        },
                        "Arrow": {
                            "value": "%SystemRoot%\\cursors\\aero_arrow_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "NWPen": {
                            "value": "%SystemRoot%\\cursors\\aero_pen_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNS": {
                            "value": "%SystemRoot%\\cursors\\aero_ns_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeWE": {
                            "value": "%SystemRoot%\\cursors\\aero_ew_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeAll": {
                            "value": "%SystemRoot%\\cursors\\aero_move_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "UpArrow": {
                            "value": "%SystemRoot%\\cursors\\aero_up_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNESW": {
                            "value": "%SystemRoot%\\cursors\\aero_nesw_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNWSE": {
                            "value": "%SystemRoot%\\cursors\\aero_nwse_l.cur",
                            "dataType": "REG_SZ"
                        },
                        "AppStarting": {
                            "value": "%SystemRoot%\\cursors\\aero_working_l.ani",
                            "dataType": "REG_SZ"
                        }
                    },
                    "Extra Large": {
                        "No": {
                              "value": "%SystemRoot%\\cursors\\aero_unavail_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "Hand": {
                            "value": "%SystemRoot%\\cursors\\aero_link_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "Help": {
                            "value": "%SystemRoot%\\cursors\\aero_helpsel_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "Wait": {
                            "value": "%SystemRoot%\\cursors\\aero_busy_xl.ani",
                            "dataType": "REG_SZ"
                        },
                        "Arrow": {
                            "value": "%SystemRoot%\\cursors\\aero_arrow_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "NWPen": {
                            "value": "%SystemRoot%\\cursors\\aero_pen_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNS": {
                            "value": "%SystemRoot%\\cursors\\aero_ns_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeWE": {
                            "value": "%SystemRoot%\\cursors\\aero_ew_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeAll": {
                            "value": "%SystemRoot%\\cursors\\aero_move_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "UpArrow": {
                            "value": "%SystemRoot%\\cursors\\aero_up_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNESW": {
                            "value": "%SystemRoot%\\cursors\\aero_nesw_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNWSE": {
                            "value": "%SystemRoot%\\cursors\\aero_nwse_xl.cur",
                            "dataType": "REG_SZ"
                        },
                        "AppStarting": {
                            "value": "%SystemRoot%\\cursors\\aero_working_xl.ani",
                            "dataType": "REG_SZ"
                        }
                    }
                }
            },
            verbalizePunctuationStyleList: [0, 1, 2, 3],
            verbalizePunctuationStyleNames: ["All", "Most", "Some", "None"],
            sayAllStyleNames: ["Line", "Sentence"],
            sayAllStyleList: [0, 1],
            cursorSizeNames: ["Small", "Normal", "Large", "Extra-Large"],
            cursorSizeList: [-1, 20, 29, 41],
            defaults: {
                "http://registry.gpii.org/applications/net.gpii.pilot1.notes": [{ value: "" }],
                // LINUX
                "http://registry.gpii.org/applications/org.gnome.orca": [{
                    value: {
                        enableTutorialMessages: false,
                        enableEchoByCharacter: false,
                        enableEchoByWord: false,
                        enableBraille: false,
                        verbalizePunctuationStyle: 3,
                        sayAllStyle: 1,
                        enableSpeech: false,
                        "voices.default.rate": 50.0,
                        "voices.default.family": {
                            locale: "en",
                            name: "english"
                        }
                    }
                }],
                "http://registry.gpii.org/applications/org.gnome.desktop.interface": [{
                    value: {
                        "gtk-theme": "Adwaita",
                        "icon-theme": "gnome",
                        "text-scaling-factor": 1.0,
                        "cursor-size": 20
                    }
                }],
                "http://registry.gpii.org/applications/org.gnome.desktop.a11y.magnifier": [{
                    value: {
                        "mag-factor": 1.0,
                        "screen-position": "full-screen",
                        "show-cross-hairs": false
                    }
                }],
                // WINDOWS
                "http://registry.gpii.org/applications/org.nvda-project": [{
                    value: {
                        "speech.espeak.voice": "en\\en",
                        "speech.espeak.rate": 30,
                        "speech.espeak.rateBoost": false,
                        "reviewCursor.followFocus": true,
                        "reviewCursor.followCaret": true,
                        "reviewCursor.followMouse": false,
                        "presentation.reportHelpBalloons": true,
                        "keyboard.speakTypedCharacters": true,
                        "keyboard.speakTypedWords": false,
                        "speech.espeak.sayCapForCapitals": false,
                        "speech.symbolLevel": 100,
                        "virtualBuffers.autoSayAllOnPageLoad": false,
                        "speech.synth": "espeak",
                        "speech.outputDevice": "Microsoft Sound Mapper"
                    }
                }],
                "http://registry.gpii.org/applications/com.microsoft.windows.highContrast": [{
                    value: {
                        highContrastOn: {
                            path: "pvParam.dwFlags.HCF_HIGHCONTRASTON",
                            value: false
                        }
                    }
                }],
                "http://registry.gpii.org/applications/com.microsoft.windows.cursors": [{
                    value: {
                        "No": {
                            "value": "%SystemRoot%\\cursors\\aero_unavail.cur",
                            "dataType": "REG_SZ"
                        },
                        "Hand": {
                            "value": "%SystemRoot%\\cursors\\aero_link.cur",
                            "dataType": "REG_SZ"
                        },
                        "Help": {
                            "value": "%SystemRoot%\\cursors\\aero_helpsel.cur",
                            "dataType": "REG_SZ"
                        },
                        "Wait": {
                            "value": "%SystemRoot%\\cursors\\aero_busy.ani",
                            "dataType": "REG_SZ"
                        },
                        "Arrow": {
                            "value": "%SystemRoot%\\cursors\\aero_arrow.cur",
                            "dataType": "REG_SZ"
                        },
                        "NWPen": {
                            "value": "%SystemRoot%\\cursors\\aero_pen.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNS": {
                            "value": "%SystemRoot%\\cursors\\aero_ns.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeWE": {
                            "value": "%SystemRoot%\\cursors\\aero_ew.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeAll": {
                            "value": "%SystemRoot%\\cursors\\aero_move.cur",
                            "dataType": "REG_SZ"
                        },
                        "UpArrow": {
                            "value": "%SystemRoot%\\cursors\\aero_up.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNESW": {
                            "value": "%SystemRoot%\\cursors\\aero_nesw.cur",
                            "dataType": "REG_SZ"
                        },
                        "SizeNWSE": {
                            "value": "%SystemRoot%\\cursors\\aero_nwse.cur",
                            "dataType": "REG_SZ"
                        },
                        "AppStarting": {
                            "value": "%SystemRoot%\\cursors\\aero_working.ani",
                            "dataType": "REG_SZ"
                        }
                    }
                }],
                "http://registry.gpii.org/applications/com.microsoft.windows.magnifier": [{
                    value: {
                        Magnification: {
                            value: 100,
                            dataType: "REG_DWORD"
                        },
                        FollowFocus: {
                            value: 0,
                            dataType: "REG_DWORD"
                        },
                        FollowCaret: {
                            value: 0,
                            dataType: "REG_DWORD"
                        },
                        FollowMouse: {
                            value: 1,
                            dataType: "REG_DWORD"
                        },
                        MagnificationMode: {
                            value: 2,
                            dataType: "REG_DWORD"
                        }
                    }
                }]
            },
            prefs: {},
            savedPrefs: {}
        },
        protoTree: {
            save: {
                messagekey: "save"
            },
            tokenLabel: {
                messagekey: "tokenLabel"
            },
            token: "${token}",
            notesLabel: {
                messagekey: "notes"
            },
            notes: "${prefs.http://registry\\.gpii\\.org/applications/net\\.gpii\\.pilot1\\.notes.0.value}",
            label: {
                messagekey: "label"
            },
            linuxGroupLabel: {
                messagekey: "linuxGroupLabel"
            },
            windowsGroupLabel: {
                messagekey: "windowsGroupLabel"
            },
            orcaGroupLabel: {
                messagekey: "orcaGroupLabel"
            },
            gnomeGroupLabel: {
                messagekey: "gnomeGroupLabel"
            },
            easeOfAccessGroupLabel: {
                messagekey: "easeOfAccessGroupLabel"
            },
            a11yGroupLabel: {
                messagekey: "a11yGroupLabel"
            },
            nvdaGroupLabel: {
                messagekey: "nvdaGroupLabel"
            },
            magnifierGroupLabel: {
                messagekey: "magnifierGroupLabel"
            },
            "orca.voice.default.family": {
                optionnames: "${voicesDefaultFamily.valuelist}",
                optionlist: "${voicesDefaultFamily.valuelist}",
                selection: "${voicesDefaultFamily.selection}"
            },
            "orca.voice.default.familyLabel": {messagekey: "orca.voice.default.familyLabel"},
            "orca.voice.default.rate": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.voices\\.default\\.rate",
                        model: {
                            min: 0.0,
                            max: 100.0
                        },
                        sliderOptions: {
                            step: 0.1
                        }
                    }
                }
            },
            "orca.voice.default.rateLabel": {messagekey: "orca.voice.default.rateLabel"},
            "orca.enableTutorialMessages": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.enableTutorialMessages}",
            "orca.enableTutorialMessagesLabel": {messagekey: "orca.enableTutorialMessagesLabel"},
            "orca.enableEchoByCharacter": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.enableEchoByCharacter}",
            "orca.enableEchoByCharacterLabel": {messagekey: "orca.enableEchoByCharacterLabel"},
            "orca.enableEchoByWord": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.enableEchoByWord}",
            "orca.enableEchoByWordLabel": {messagekey: "orca.enableEchoByWordLabel"},
            "orca.enableBraille": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.enableBraille}",
            "orca.enableBrailleLabel": {messagekey: "orca.enableBrailleLabel"},
            "orca.verbalizePunctuationStyle": {
                decorators: {
                    type: "fluid",
                    func: "gpii.numericDropDown",
                    options: {
                        optionnames: "${verbalizePunctuationStyleNames}",
                        optionlist: "${verbalizePunctuationStyleList}",
                        selection: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.verbalizePunctuationStyle"
                    }
                }
            },
            "orca.verbalizePunctuationStyleLabel": {messagekey: "orca.verbalizePunctuationStyleLabel"},
            "orca.sayAllStyle": {
                decorators: {
                    type: "fluid",
                    func: "gpii.numericDropDown",
                    options: {
                        optionnames: "${sayAllStyleNames}",
                        optionlist: "${sayAllStyleList}",
                        selection: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.sayAllStyle"
                    }
                }
            },
            "orca.sayAllStyleLabel": {messagekey: "orca.sayAllStyleLabel"},
            "orca.enableSpeech": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.enableSpeech}",
            "orca.enableSpeechLabel": {messagekey: "orca.enableSpeechLabel"},
            "desktop.gtk-theme": {
                optionnames: "${gtk-themeValues}",
                optionlist: "${gtk-themeValues}",
                selection: "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.interface.0.value.gtk-theme}"
            },
            "desktop.gtk-themeLabel": {messagekey: "desktop.gtk-themeLabel"},
            "desktop.icon-theme": {
                optionnames: "${icon-themeValues}",
                optionlist: "${icon-themeValues}",
                selection: "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.interface.0.value.icon-theme}"
            },
            "desktop.icon-themeLabel": {messagekey: "desktop.icon-themeLabel"},
            "desktop.text-scaling-factor": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.interface.0.value.text-scaling-factor",
                        model: {
                            min: 0.5,
                            max: 3
                        },
                        sliderOptions: {
                            step: 0.1
                        }
                    }
                }
            },
            "desktop.text-scaling-factorLabel": {messagekey: "desktop.text-scaling-factorLabel"},
            "desktop.cursor-size": {
                decorators: {
                    type: "fluid",
                    func: "gpii.numericDropDown",
                    options: {
                        optionnames: "${cursorSizeNames}",
                        optionlist: "${cursorSizeList}",
                        selection: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.interface.0.value.cursor-size"
                    }
                }
            },
            "desktop.cursor-sizeLabel": {messagekey: "desktop.cursor-sizeLabel"},
            "desktop.mag-factor": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.a11y\\.magnifier.0.value.mag-factor",
                        model: {
                            min: 0.1,
                            max: 32.0
                        },
                        sliderOptions: {
                            step: 0.1
                        }
                    }
                }
            },
            "desktop.mag-factorLabel": {messagekey: "desktop.mag-factorLabel"},
            "desktop.screen-position": {
                optionnames: "${screen-positionValues}",
                optionlist: "${screen-positionValues}",
                selection: "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.a11y\\.magnifier.0.value.screen-position}"
            },
            "desktop.screen-positionLabel": {messagekey: "desktop.screen-positionLabel"},
            "desktop.show-cross-hairs": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.desktop\\.a11y\\.magnifier.0.value.show-cross-hairs}",
            "desktop.show-cross-hairsLabel": {messagekey: "desktop.show-cross-hairsLabel"},
            "nvda.speech.espeak.voice": {
                optionnames: "${speechEspeakVoiceNames}",
                optionlist: "${speechEspeakVoiceValues}",
                selection: "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.speech\\.espeak\\.voice}"
            },
            "nvda.speech.espeak.voiceLabel": {
                messagekey: "nvda.speech.espeak.voiceLabel"
            },
            "nvda.speech.espeak.rate": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.speech\\.espeak\\.rate",
                        model: {
                            min: 1,
                            max: 100
                        }
                    }
                }
            },
            "nvda.speech.espeak.rateLabel": {messagekey: "nvda.speech.espeak.rateLabel"},
            "nvda.speech.espeak.rateBoost": "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.speech\\.espeak\\.rateBoost}",
            "nvda.speech.espeak.rateBoostLabel": {messagekey: "nvda.speech.espeak.rateBoostLabel"},
            "nvda.reviewCursor.followFocus": "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.reviewCursor\\.followFocus}",
            "nvda.reviewCursor.followFocusLabel": {messagekey: "nvda.reviewCursor.followFocusLabel"},
            "nvda.reviewCursor.followCaret": "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.reviewCursor\\.followCaret}",
            "nvda.reviewCursor.followCaretLabel": {messagekey: "nvda.reviewCursor.followCaretLabel"},
            "nvda.reviewCursor.followMouse": "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.reviewCursor\\.followMouse}",
            "nvda.reviewCursor.followMouseLabel": {messagekey: "nvda.reviewCursor.followMouseLabel"},
            "nvda.presentation.reportHelpBalloons": "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.presentation\\.reportHelpBalloons}",
            "nvda.presentation.reportHelpBalloonsLabel": {messagekey: "nvda.presentation.reportHelpBalloonsLabel"},
            "nvda.keyboard.speakTypedCharacters": "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.keyboard\\.speakTypedCharacters}",
            "nvda.keyboard.speakTypedCharactersLabel": {messagekey: "nvda.keyboard.speakTypedCharactersLabel"},
            "nvda.keyboard.speakTypedWords": "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.keyboard\\.speakTypedWords}",
            "nvda.keyboard.speakTypedWordsLabel": {messagekey: "nvda.keyboard.speakTypedWordsLabel"},
            "nvda.speech.espeak.sayCapForCapitals": "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.speech\\.espeak\\.sayCapForCapitals}",
            "nvda.speech.espeak.sayCapForCapitalsLabel": {messagekey: "nvda.speech.espeak.sayCapForCapitalsLabel"},
            "nvda.speech.symbolLevel": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.speech\\.symbolLevel",
                        model: {
                            min: 0,
                            max: 300
                        },
                        sliderOptions: {
                            step: 100
                        }
                    }
                }
            },
            "nvda.speech.symbolLevelLabel": {messagekey: "nvda.speech.symbolLevelLabel"},
            "nvda.virtualBuffers.autoSayAllOnPageLoad": "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.virtualBuffers\\.autoSayAllOnPageLoad}",
            "nvda.virtualBuffers.autoSayAllOnPageLoadLabel": {messagekey: "nvda.virtualBuffers.autoSayAllOnPageLoadLabel"},
            "nvda.speech.synth": {
                optionnames: "${speechSynthNames}",
                optionlist: "${speechSynthValues}",
                selection: "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.speech\\.synth}"
            },
            "nvda.speech.synthLabel": {messagekey: "nvda.speech.synthLabel"},
            "nvda.speech.outputDevice": {
                optionnames: "${outputDeviceNames}",
                optionlist: "${outputDeviceValues}",
                selection: "${prefs.http://registry\\.gpii\\.org/applications/org\\.nvda-project.0.value.speech\\.outputDevice}"
            },
            "nvda.speech.outputDeviceLabel": {messagekey: "nvda.speech.outputDeviceLabel"},
            "desktop.highContrastOn": "${prefs.http://registry\\.gpii\\.org/applications/com\\.microsoft\\.windows\\.highContrast.0.value.highContrastOn.value}",
            "desktop.highContrastOnLabel": {messagekey: "desktop.highContrastOnLabel"},
            "desktop.cursors": {
                optionnames: "${cursors.valuelist}",
                optionlist: "${cursors.valuelist}",
                selection: "${cursors.selection}"
            },
            "desktop.cursorsLabel": {messagekey: "desktop.cursorsLabel"},
            "magnifier.Magnification": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/com\\.microsoft\\.windows\\.magnifier.0.value.Magnification.value",
                        model: {
                            min: 100,
                            max: 1600
                        },
                        sliderOptions: {
                            step: 25
                        }
                    }
                }
            },
            "magnifier.MagnificationLabel": {messagekey: "magnifier.MagnificationLabel"},
            "magnifier.FollowFocus": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/com\\.microsoft\\.windows\\.magnifier.0.value.FollowFocus.value",
                        model: {
                            min: 0,
                            max: 1
                        }
                    }
                }
            },
            "magnifier.FollowFocusLabel": {messagekey: "magnifier.FollowFocusLabel"},
            "magnifier.FollowCaret": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/com\\.microsoft\\.windows\\.magnifier.0.value.FollowCaret.value",
                        model: {
                            min: 0,
                            max: 1
                        }
                    }
                }
            },
            "magnifier.FollowCaretLabel": {messagekey: "magnifier.FollowCaretLabel"},
            "magnifier.FollowMouse": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/com\\.microsoft\\.windows\\.magnifier.0.value.FollowMouse.value",
                        model: {
                            min: 0,
                            max: 1
                        }
                    }
                }
            },
            "magnifier.FollowMouseLabel": {messagekey: "magnifier.FollowMouseLabel"},
            "magnifier.MagnificationMode": {
                decorators: {
                    type: "fluid",
                    func: "gpii.numericDropDown",
                    options: {
                        optionnames: "${magnificationModeNames}",
                        optionlist: "${magnificationModeValues}",
                        selection: "prefs.http://registry\\.gpii\\.org/applications/com\\.microsoft\\.windows\\.magnifier.0.value.MagnificationMode.value"
                    }
                }
            },
            "magnifier.MagnificationModeLabel": {messagekey: "magnifier.MagnificationModeLabel"}
        },
        events: {
            updatePrefs: null
        },
        prefsUrl: "/prefs/%token",
        listeners: {
            updatePrefs: "{that}.updatePrefs",
            afterRender: "{that}.bindSave",
            prepareModelForRender: "{that}.prepareModel"
        },
        invokers: {
            updatePrefs: {
                funcName: "gpii.NPGatheringTool.updatePrefs",
                args: ["{that}.applier", "{arguments}.0", "{that}.refreshView"]
            },
            save: {
                funcName: "gpii.NPGatheringTool.save",
                args: "{that}"
            },
            bindSave: {
                funcName: "gpii.NPGatheringTool.bindSave",
                args: ["{that}.dom.save", "{that}.save"]
            },
            prepareModel: {
                funcName: "gpii.NPGatheringTool.prepareModel",
                args: ["{that}.model", "{that}.applier"]
            },
            buildModel: {
                funcName: "gpii.NPGatheringTool.buildModel",
                args: ["{that}.model"]
            }
        },
        components: {
            tokenReader: {
                type: "gpii.tokenReader"
            }
        },
        renderOnInit: true,
        // Both set and get configs are used to resolve elPaths that contain escaped "." characters
        // and to prevent these paths from being parsed into a nested structure.
        resolverGetConfig: gpii.NPGatheringTool.resolverGetConfig,
        resolverSetConfig: gpii.NPGatheringTool.resolverSetConfig
    });

    gpii.NPGatheringTool.prepareModel = function (model, applier) {
        var prefs = $.extend(true, fluid.copy(model.defaults), fluid.copy(model.savedPrefs));
        applier.requestChange("prefs", prefs);
    };

    gpii.NPGatheringTool.deepEq = function (obj1, obj2) {
        var equal = true;
        $.each(obj1, function (key, val) {
            if (fluid.isPrimitive(val)) {
                equal = val === obj2[key];
            } else {
                equal = gpii.NPGatheringTool.deepEq(val, obj2[key]);
            }
            return equal;
        });
        return equal;
    };

    gpii.NPGatheringTool.finalInit = function (that) {
        var bindings = {
            cursors:
                "prefs.http://registry\\.gpii\\.org/applications/com\\.microsoft\\.windows\\.cursors.0.value",
            voicesDefaultFamily:
                "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.voices\\.default\\.family"
        };

        fluid.each(bindings, function (elPath, path) {
            var selPath = fluid.model.composeSegments(path, "selection");
            var values = that.model[path].values;
            that.applier.modelChanged.addListener(selPath, function (model, oldModel, changeRequest) {
                if (changeRequest[0].oneWay) {return;}
                that.applier.fireChangeRequest({
                    path: elPath,
                    value: values[model[path].selection],
                    oneWay: true
                });
            });
            that.applier.modelChanged.addListener(elPath, function (model, oldModel, changeRequest) {
                if (changeRequest[0].oneWay) {return;}
                var newValue = fluid.get(that.model, elPath, that.options.resolverGetConfig);
                var selection = fluid.find(values, function (value, key) {
                    if (gpii.NPGatheringTool.deepEq(newValue, value)) {
                        return key;
                    }
                });
                if (selection === model[path].selection) {return;}
                that.applier.fireChangeRequest({
                    path: selPath,
                    value: selection,
                    oneWay: true
                });
            });
        });
    };

    gpii.NPGatheringTool.updatePrefs = function (applier, model, refreshView) {
        applier.requestChange("token", model.token);
        applier.requestChange("savedPrefs", model.prefs);
        refreshView();
    };

    gpii.NPGatheringTool.bindSave = function (saveButton, save) {
        saveButton.click(save);
    };

    gpii.NPGatheringTool.buildModel = function (model) {
        var togo = fluid.copy(model.prefs);
        fluid.remove_if(togo, function (val, key) {
            if (fluid.isPrimitive(val)) {
                return val === model.defaults[key];
            } else {
                return gpii.NPGatheringTool.deepEq(model.defaults[key], val);
            }
        });
        return togo;
    };

    gpii.NPGatheringTool.save = function (that) {
        var token = that.model.token;
        if (!token) {
            alert(that.options.strings.missingToken);
            return;
        }
        var data = that.buildModel();
        $.ajax({
            url: fluid.stringTemplate(that.options.prefsUrl, {token: token}),
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (data) {
                if (data.isError) {
                    return;
                }
                location.replace(token);
            }
        });
    };

    fluid.defaults("gpii.numericDropDown", {
        gradeNames: ["autoInit", "fluid.rendererComponent"],
        applier: "{gpii.NPGatheringTool}.applier",
        model: "{gpii.NPGatheringTool}.model",
        resolverGetConfig: "{gpii.NPGatheringTool}.options.resolverGetConfig",
        optionnames: [],
        optionlist: [],
        selection: "",
        produceTree: "gpii.numericDropDown.produceTree",
        selectors: {
            select: ".gpii-numericDropDown-select"
        },
        listeners: {
            afterRender: "{that}.updateSelection",
            onDestroy: "{that}.clearListener"
        },
        renderOnInit: true
    });
    gpii.numericDropDown.preInit = function (that) {
        var originalSelection = fluid.get(that.model, that.options.selection, that.options.resolverGetConfig);
        that.applier.requestChange(that.options.selection, originalSelection.toString());
        that.updateSelection = function () {
            that.applier.requestChange(that.options.selection, originalSelection);
        };
        var listener = function (model, changeRequest) {
            if (changeRequest.path !== that.options.selection) {
                return;
            }
            changeRequest.value |= 0;
        };
        that.clearListener = function () {
            that.applier.guards.removeListener(listener);
        };
        that.applier.guards.addListener(that.options.selection, listener);
        that.options.optionlist = fluid.transform(that.options.optionlist, function (option) {
            return option.toString();
        });
    };
    gpii.numericDropDown.produceTree = function (that) {
        return {
            select: {
                optionnames: that.options.optionnames,
                optionlist: that.options.optionlist,
                selection: "${" + that.options.selection + "}"
            }
        };
    };

    fluid.defaults("gpii.textfieldSlider", {
        gradeNames: ["autoInit", "fluid.textfieldSlider"],
        elPath: "",
        sliderOptions: {
            orientation: "horizontal",
            step: 1
        },
        model: {
            value: {
                expander: {
                    func: "fluid.get",
                    args: ["{gpii.NPGatheringTool}.model", "{that}.options.elPath", "{gpii.NPGatheringTool}.options.resolverGetConfig"]
                }
            }
        },
        listeners: {
            modelChanged: {
                listener: "{gpii.NPGatheringTool}.applier.requestChange",
                args: ["{that}.options.elPath", "{arguments}.0"]
            }
        }
    });

    fluid.defaults("gpii.tokenReader", {
        gradeNames: ["autoInit", "fluid.eventedComponent"],
        token: {
            expander: {
                func: "gpii.tokenReader.readToken"
            }
        },
        invokers: {
            readPrefs: {
                funcName: "gpii.tokenReader.readPrefs",
                args: ["{that}.options.token", "{that}.options.prefsUrl", "{that}.events.afterReadPrefs"]
            }
        },
        prefsUrl: "{gpii.NPGatheringTool}.options.prefsUrl",
        events: {
            afterReadPrefs: "{gpii.NPGatheringTool}.events.updatePrefs"
        },
        listeners: {
            onCreate: "{that}.readPrefs"
        }
    });

    gpii.tokenReader.readToken = function () {
        return location.pathname.match(/\/(.*)/)[1];
    };

    gpii.tokenReader.readPrefs = function (token, url, afterReadPrefs) {
        if (!token) {
            return;
        }
        fluid.fetchResources({
            prefs: {
                url: fluid.stringTemplate(url, {token: token}),
                options: {
                    dataType: "json"
                }
            }
        }, function (resourceSpec) {
            var prefs = resourceSpec.prefs.resourceText;
            if (prefs.isError) {
                return;
            }
            afterReadPrefs.fire({
                token: token,
                prefs: prefs
            });
        });
    };

    $(document).ready(function () {
        gpii.NPGatheringTool(".gpii-NPGatheringTool");
    });
    
})(jQuery, fluid);
