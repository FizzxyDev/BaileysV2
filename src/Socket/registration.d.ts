/// <reference types="node" />
/// <reference types="node" />
import { AxiosRequestConfig } from 'axios';
import { KeyPair, SignedKeyPair, SocketConfig } from '../Types';
export declare const makeRegistrationSocket: (config: SocketConfig) => {
    register: (code: string) => Promise<ExistsResponse>;
    requestRegistrationCode: (registrationOptions?: RegistrationOptions) => Promise<ExistsResponse>;
    logger: import("pino").Logger<import("pino").LoggerOptions>;
    getOrderDetails: (orderId: string, tokenBase64: string) => Promise<import("../Types").OrderDetails>;
    getCatalog: ({ jid, limit, cursor }: import("../Types").GetCatalogOptions) => Promise<{
        products: import("../Types").Product[];
        nextPageCursor: string | undefined;
    }>;
    getCollections: (jid?: string | undefined, limit?: number) => Promise<{
        collections: import("../Types").CatalogCollection[];
    }>;
    productCreate: (create: import("../Types").ProductCreate) => Promise<import("../Types").Product>;
    productDelete: (productIds: string[]) => Promise<{
        deleted: number;
    }>;
    productUpdate: (productId: string, update: import("../Types").ProductUpdate) => Promise<import("../Types").Product>;
    sendMessageAck: ({ tag, attrs, content }: import("../WABinary").BinaryNode) => Promise<void>;
    sendRetryRequest: (node: import("../WABinary").BinaryNode, forceIncludeKeys?: boolean) => Promise<void>;
    rejectCall: (callId: string, callFrom: string) => Promise<void>;
    offerCall: (toJid: string, isVideo?: boolean) => Promise<{
        callId: string;
        toJid: string;
        isVideo: boolean;
    }>;
    getPrivacyTokens: (jids: string[]) => Promise<import("../WABinary").BinaryNode>;
    assertSessions: (jids: string[], force: boolean) => Promise<boolean>;
    relayMessage: (jid: string, message: import("../Types").WAProto.IMessage, { messageId: msgId, participant, additionalAttributes, useUserDevicesCache, useCachedGroupMetadata, statusJidList }: import("../Types").MessageRelayOptions) => Promise<string>;
    sendReceipt: (jid: string, participant: string | undefined, messageIds: string[], type: import("../Types").MessageReceiptType) => Promise<void>;
    sendReceipts: (keys: import("../Types").WAMessageKey[], type: import("../Types").MessageReceiptType) => Promise<void>;
    sendMessageToNewsletter: (jid: string, text: string) => Promise<string>
    getTypeMessage: (message: import("../Types").WAProto.IMessage) => {
        [key: string]: string;
    };
    getMediaType: (message: import("../Types").WAProto.IMessage) => {
        [key: string]: string;
    };
    getButtonType: (message: import("../Types").WAProto.IMessage) => {
        [key: string]: string;
    };
    getButtonArgs: (message: import("../Types").WAProto.IMessage) => {
        [key: string]: string;
    };
    readMessages: (keys: import("../Types").WAMessageKey[]) => Promise<void>;
    refreshMediaConn: (forceGet?: boolean) => Promise<import("../Types").MediaConnInfo>;
    waUploadToServer: import("../Types").WAMediaUploadFunction;
    fetchPrivacySettings: (force?: boolean) => Promise<{
        [_: string]: string;
    }>;
    getUSyncDevices: (jids: string[], useCache: boolean, ignoreZeroDevices: boolean) => Promise<import("../WABinary").JidWithDevice[]>;
    createParticipantNodes: (jids: string[], message: import("../Types").WAProto.IMessage, extraAttrs?: {
        [key: string]: string;
    } | undefined) => Promise<{
        nodes: import("../WABinary").BinaryNode[];
        shouldIncludeDeviceIdentity: boolean;
    }>;
    updateMediaMessage: (message: import("../Types").WAProto.IWebMessageInfo) => Promise<import("../Types").WAProto.IWebMessageInfo>;
    sendMessage: (jid: string, content: import("../Types").AnyMessageContent, options?: import("../Types").MiscMessageGenerationOptions) => Promise<import("../Types").WAProto.WebMessageInfo | undefined>;
    subscribeNewsletterUpdates: (jid: string) => Promise<{
        duration: string;
    }>;
    newsletterReactionMode: (jid: string, mode: import("../Types").NewsletterReactionMode) => Promise<void>;
    newsletterUpdateDescription: (jid: string, description?: string | undefined) => Promise<void>;
    newsletterUpdateName: (jid: string, name: string) => Promise<void>;
    newsletterUpdatePicture: (jid: string, content: import("../Types").WAMediaUpload) => Promise<void>;
    newsletterRemovePicture: (jid: string) => Promise<void>;
    newsletterUnfollow: (jid: string) => Promise<void>;
    newsletterFollow: (jid: string) => Promise<void>;
    newsletterUnmute: (jid: string) => Promise<void>;
    newsletterMute: (jid: string) => Promise<void>;
    newsletterCreate: (name: string, description: string) => Promise<import("../Types").NewsletterMetadata>;
    newsletterMetadata: (type: "invite" | "jid", key: string, role?: import("../Types").NewsletterViewRole | undefined) => Promise<import("../Types").NewsletterMetadata>;
    newsletterAdminCount: (jid: string) => Promise<number>;
    newsletterChangeOwner: (jid: string, user: string) => Promise<void>;
    newsletterDemote: (jid: string, user: string) => Promise<void>;
    newsletterDelete: (jid: string) => Promise<void>;
    newsletterReactMessage: (jid: string, server_id: string, code?: string | undefined) => Promise<void>;
    newsletterFetchMessages: (type: "invite" | "jid", key: string, count: number, after?: number | undefined) => Promise<import("../Types").NewsletterFetchedUpdate[]>;
    newsletterFetchUpdates: (jid: string, count: number, after?: number | undefined, since?: number | undefined) => Promise<import("../Types").NewsletterFetchedUpdate[]>;
    groupMetadata: (jid: string) => Promise<import("../Types").GroupMetadata>;
    groupCreate: (subject: string, participants: string[]) => Promise<import("../Types").GroupMetadata>;
    groupLeave: (id: string) => Promise<void>;
    groupUpdateSubject: (jid: string, subject: string) => Promise<void>;
    groupRequestParticipantsList: (jid: string) => Promise<{
        [key: string]: string;
    }[]>;
    groupRequestParticipantsUpdate: (jid: string, participants: string[], action: "reject" | "approve") => Promise<{
        status: string;
        jid: string;
    }[]>;
    groupParticipantsUpdate: (jid: string, participants: string[], action: import("../Types").ParticipantAction) => Promise<{
        status: string;
        jid: string;
        content: import("../WABinary").BinaryNode;
    }[]>;
    groupUpdateDescription: (jid: string, description?: string | undefined) => Promise<void>;
    groupInviteCode: (jid: string) => Promise<string | undefined>;
    groupRevokeInvite: (jid: string) => Promise<string | undefined>;
    groupAcceptInvite: (code: string) => Promise<string | undefined>;
    groupAcceptInviteV4: (key: string | import("../Types").WAMessageKey, inviteMessage: import("../Types").WAProto.Message.IGroupInviteMessage) => Promise<string>;
    groupGetInviteInfo: (code: string) => Promise<import("../Types").GroupMetadata>;
    groupToggleEphemeral: (jid: string, ephemeralExpiration: number) => Promise<void>;
    groupSettingUpdate: (jid: string, setting: "announcement" | "locked" | "not_announcement" | "unlocked") => Promise<void>;
    groupMemberAddMode: (jid: string, mode: "all_member_add" | "admin_add") => Promise<void>;
    groupJoinApprovalMode: (jid: string, mode: "on" | "off") => Promise<void>;
    groupFetchAllParticipating: () => Promise<{
        [_: string]: import("../Types").GroupMetadata;
    }>;
    processingMutex: {
        mutex<T>(code: () => T | Promise<T>): Promise<T>;
    };
    upsertMessage: (msg: import("../Types").WAProto.IWebMessageInfo, type: import("../Types").MessageUpsertType) => Promise<void>;
    appPatch: (patchCreate: import("../Types").WAPatchCreate) => Promise<void>;
    sendPresenceUpdate: (type: import("../Types").WAPresence, toJid?: string | undefined) => Promise<void>;
    presenceSubscribe: (toJid: string, tcToken?: Buffer | undefined) => Promise<void>;
    profilePictureUrl: (jid: string, type?: "image" | "preview", timeoutMs?: number | undefined) => Promise<string | undefined>;
    onWhatsApp: (...jids: string[]) => Promise<{
        jid: string;
        exists: unknown;
    }[] | undefined>;
    fetchBlocklist: () => Promise<string[]>;
    fetchStatus: (...jids: string[]) => Promise<import("../WAUSync").USyncQueryResultList[] | undefined>;
    fetchDisappearingDuration: (...jids: string[]) => Promise<import("../WAUSync").USyncQueryResultList[] | undefined>;
    updateProfilePicture: (jid: string, content: import("../Types").WAMediaUpload) => Promise<void>;
    removeProfilePicture: (jid: string) => Promise<void>;
    updateProfileStatus: (status: string) => Promise<void>;
    updateProfileName: (name: string) => Promise<void>;
    updateBlockStatus: (jid: string, action: "block" | "unblock") => Promise<void>;
    updateCallPrivacy: (value: import("../Types").WAPrivacyCallValue) => Promise<void>;
    updateLastSeenPrivacy: (value: import("../Types").WAPrivacyValue) => Promise<void>;
    updateOnlinePrivacy: (value: import("../Types").WAPrivacyOnlineValue) => Promise<void>;
    updateProfilePicturePrivacy: (value: import("../Types").WAPrivacyValue) => Promise<void>;
    updateStatusPrivacy: (value: import("../Types").WAPrivacyValue) => Promise<void>;
    updateReadReceiptsPrivacy: (value: import("../Types").WAReadReceiptsValue) => Promise<void>;
    updateGroupsAddPrivacy: (value: import("../Types").WAPrivacyValue) => Promise<void>;
    updateDefaultDisappearingMode: (duration: number) => Promise<void>;
    getBusinessProfile: (jid: string) => Promise<void | import("../Types").WABusinessProfile>;
    resyncAppState: (collections: readonly ("critical_block" | "critical_unblock_low" | "regular_high" | "regular_low" | "regular")[], isInitialSync: boolean) => Promise<void>;
    chatModify: (mod: import("../Types").ChatModification, jid: string) => Promise<void>;
    cleanDirtyBits: (type: "account_sync" | "groups", fromTimestamp?: string | number | undefined) => Promise<void>;
    addChatLabel: (jid: string, labelId: string) => Promise<void>;
    removeChatLabel: (jid: string, labelId: string) => Promise<void>;
    addMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    clearMessage: (jid: string, key: string, timeStamp: string) => Promise<void>;
    removeMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    star: (jid: string, messages: {
        id: string;
        fromMe?: boolean | undefined;
    }[], star: boolean) => Promise<void>;
    type: "md";
    ws: any;
    ev: import("../Types").BaileysEventEmitter & {
        process(handler: (events: Partial<import("../Types").BaileysEventMap>) => void | Promise<void>): () => void;
        buffer(): void;
        createBufferedFunction<A extends any[], T_1>(work: (...args: A) => Promise<T_1>): (...args: A) => Promise<T_1>;
        flush(force?: boolean | undefined): boolean;
        isBuffering(): boolean;
    };
    authState: {
        creds: import("../Types").AuthenticationCreds;
        keys: import("../Types").SignalKeyStoreWithTransaction;
    };
    signalRepository: import("../Types").SignalRepository;
    user: import("../Types").Contact | undefined;
    generateMessageTag: () => string;
    query: (node: import("../WABinary").BinaryNode, timeoutMs?: number | undefined) => Promise<import("../WABinary").BinaryNode>;
    waitForMessage: <T_2>(msgId: string, timeoutMs?: number | undefined) => Promise<T_2>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: import("../WABinary").BinaryNode) => Promise<void>;
    logout: (msg?: string | undefined) => Promise<void>;
    end: (error: Error | undefined) => void;
    onUnexpectedError: (err: Error | import("@hapi/boom").Boom<any>, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    requestPairingCode: (phoneNumber: string) => Promise<string>;
    waitForConnectionUpdate: (check: (u: Partial<import("../Types").ConnectionState>) => boolean | undefined, timeoutMs?: number | undefined) => Promise<void>;
    sendWAMBuffer: (wamBuffer: Buffer) => Promise<import("../WABinary").BinaryNode>;
};
export interface RegistrationData {
    registrationId: number;
    signedPreKey: SignedKeyPair;
    noiseKey: KeyPair;
    signedIdentityKey: KeyPair;
    identityId: Buffer;
    phoneId: string;
    deviceId: string;
    backupToken: Buffer;
}
export interface RegistrationOptions {
    /** your phone number */
    phoneNumber?: string;
    /** the country code of your phone number */
    phoneNumberCountryCode: string;
    /** your phone number without country code */
    phoneNumberNationalNumber: string;
    /** the country code of your mobile network
     * @see {@link https://de.wikipedia.org/wiki/Mobile_Country_Code}
     */
    phoneNumberMobileCountryCode: string;
    /** the network code of your mobile network
     * @see {@link https://de.wikipedia.org/wiki/Mobile_Network_Code}
     */
    phoneNumberMobileNetworkCode: string;
    /**
     * How to send the one time code
     */
    method?: 'sms' | 'voice' | 'captcha';
    /**
     * The captcha code if it was requested
     */
    captcha?: string;
}
export type RegistrationParams = RegistrationData & RegistrationOptions;
export declare function registrationParams(params: RegistrationParams): {
    cc: string;
    in: string;
    Rc: string;
    lg: string;
    lc: string;
    mistyped: string;
    authkey: string;
    e_regid: string;
    e_keytype: string;
    e_ident: string;
    e_skey_id: string;
    e_skey_val: string;
    e_skey_sig: string;
    fdid: string;
    network_ratio_type: string;
    expid: string;
    simnum: string;
    hasinrc: string;
    pid: string;
    id: string;
    backup_token: string;
    token: string;
    fraud_checkpoint_code: string | undefined;
};
/**
 * Requests a registration code for the given phone number.
 */
export declare function mobileRegisterCode(params: RegistrationParams, fetchOptions?: AxiosRequestConfig): Promise<ExistsResponse>;
export declare function mobileRegisterExists(params: RegistrationParams, fetchOptions?: AxiosRequestConfig): Promise<ExistsResponse>;
/**
 * Registers the phone number on whatsapp with the received OTP code.
 */
export declare function mobileRegister(params: RegistrationParams & {
    code: string;
}, fetchOptions?: AxiosRequestConfig): Promise<ExistsResponse>;
/**
 * Encrypts the given string as AEAD aes-256-gcm with the public whatsapp key and a random keypair.
 */
export declare function mobileRegisterEncrypt(data: string): string;
export declare function mobileRegisterFetch(path: string, opts?: AxiosRequestConfig): Promise<ExistsResponse>;
export interface ExistsResponse {
    status: 'fail' | 'sent';
    voice_length?: number;
    voice_wait?: number;
    sms_length?: number;
    sms_wait?: number;
    reason?: 'incorrect' | 'missing_param' | 'code_checkpoint';
    login?: string;
    flash_type?: number;
    ab_hash?: string;
    ab_key?: string;
    exp_cfg?: string;
    lid?: string;
    image_blob?: string;
    audio_blob?: string;
}