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
            tokenLabel: "Token",
            linuxGroupLabel: "Linux",
            "orca.voice.default.familyLabel": "Orca Voice Default Family",
            "orca.voice.default.rateLabel": "Orca Voice Default Rate"
        },
        selectors: {
            save: ".gpii-NPGatheringTool-save",

            tokenLabel: ".gpii-NPGatheringTool-token-label",
            token: ".gpii-NPGatheringTool-token",

            linuxGroupLabel: ".gpii-NPGatheringTool-linuxGroupLabel",

            "orca.voice.default.family": ".gpii-NPGatheringTool-orca-voice-default-family",
            "orca.voice.default.familyLabel": ".gpii-NPGatheringTool-orca-voice-default-familyLabel",
            "orca.voice.default.rate": ".gpii-NPGatheringTool-orca-voice-default-rate",
            "orca.voice.default.rateLabel": ".gpii-NPGatheringTool-orca-voice-default-rateLabel"
        },
        model: {
            token: "",
            prefs: {
                "http://registry.gpii.org/applications/org.gnome.orca.voice.default": [{
                    value: {
                        family: null,
                        rate: 0
                    }
                }],
                "http://registry.gpii.org/applications/org.gnome.orca": [{
                    value: {
                        enableTutorialMessages: false,
                        enableEchoByCharacter: false,
                        enableEchoByWord: false,
                        enableBraille: false,
                        verbalizePunctuationStyle: 0,
                        sayAllStyle: 0
                    }
                }],
                "http://registry.gpii.org/applications/org.gnome.desktop.a11y.applications": [{
                    value: {
                        "screen-magnifier-enabled": false // TODO
                    }
                }],
                "http://registry.gpii.org/applications/org.gnome.desktop.a11y.magnifier": [{
                    value: {
                        "mag-factor": 1,
                        "screen-position": "full-screen",
                        "show-cross-hairs": false
                    }
                }]
            }
        },
        protoTree: {
            save: {
                messagekey: "save"
            },
            tokenLabel: {
                messagekey: "tokenLabel"
            },
            token: "${token}",
            linuxGroupLabel: {
                messagekey: "linuxGroupLabel"
            },
            "orca.voice.default.family": "${prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca\\.voice\\.default.0.value.family}",
            "orca.voice.default.familyLabel": {messagekey: "orca.voice.default.familyLabel"},
            "orca.voice.default.rate": {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldSlider",
                    options: {
                        elPath: "prefs.http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca\\.voice\\.default.0.value.rate",
                        model: {
                            min: 0,
                            max: 100
                        }
                    }
                }
            },
            "orca.voice.default.rateLabel": {messagekey: "orca.voice.default.rateLabel"}
        },
        events: {
            updatePrefs: null
        },
        prefsUrl: "/prefs/%token",
        listeners: {
            updatePrefs: "{that}.updatePrefs",
            afterRender: "{that}.bindSave"
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

    gpii.NPGatheringTool.updatePrefs = function (applier, model, refreshView) {
        applier.requestChange("", model);
        refreshView();
    };

    gpii.NPGatheringTool.bindSave = function (saveButton, save) {
        saveButton.click(save);
    };

    gpii.NPGatheringTool.save = function (that) {
        var token = that.model.token;
        if (!token) {
            return;
        }
        $.post(fluid.stringTemplate(that.options.prefsUrl, {token: token}), that.model.prefs).done(function (data) {
            if (data.isError) {
                return;
            }
            location.replace(token);
        });
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