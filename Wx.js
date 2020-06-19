import {promisify} from './utils'
export default {
    // 界面交互
    showToast: obj => promisify(wx.showToast, obj),
    showLoading: obj=>promisify(wx.showLoading,obj),
    showModal: obj=>promisify(wx.showModal,obj),
    showActionSheet: obj=>promisify(wx.showActionSheet,obj),
    // 导航条
    setNavigationBarTitle: obj=>promisify(wx.setNavigationBarTitle,obj),
    setNavigationBarColor: obj=>promisify(wx.setNavigationBarColor,obj),
    setTopBarText: obj=>promisify(wx.setTopBarText,obj),
    // 导航
    navigateTo: obj=>promisify(wx.navigateTo,obj),
    redirectTo: obj=>promisify(wx.redirectTo,obj),
    switchTab: obj=>promisify(wx.switchTab,obj),
    reLaunch: obj=>promisify(wx.reLaunch,obj),

    // 用户相关
    login: obj=>promisify(wx.login,obj),
    checkSession: obj=>promisify(wx.checkSession,obj),
    authorize: obj=>promisify(wx.authorize,obj),
    getUserInfo: obj=>promisify(wx.getUserInfo,obj),
    
    // 支付
    requestPayment: obj=>promisify(wx.requestPayment,obj),

    // 图片
    chooseImage: obj=>promisify(wx.chooseImage,obj),
    previewImage: obj=>promisify(wx.previewImage,obj),
    getImageInfo: obj=>promisify(wx.getImageInfo,obj),
    saveImageToPhotosAlbum: obj=>promisify(wx.saveImageToPhotosAlbum,obj),

    // 文件
    uploadFile: obj=>promisify(wx.uploadFile,obj),
    downloadFile: obj=>promisify(wx.downloadFile,obj),

    // 录音
    startRecord: obj=>promisify(wx.startRecord,obj),

    // 音频播放
    playVoice: obj=>promisify(wx.playVoice,obj),

    // 音乐播放
    getBackgroundAudioPlayerState: obj=>promisify(wx.getBackgroundAudioPlayerState,obj),
    playBackgroundAudio: obj=>promisify(wx.playBackgroundAudio,obj),
    seekBackgroundAudio: obj=>promisify(wx.seekBackgroundAudio,obj),

    // 视频
    chooseVideo: obj=>promisify(wx.chooseVideo,obj),
    saveVideoToPhotosAlbum: obj=>promisify(wx.saveVideoToPhotosAlbum,obj),

    // 文件
    saveFile: obj=>promisify(wx.saveFile,obj),
    getFileInfo: obj=>promisify(wx.getFileInfo,obj),
    getSavedFileList: obj=>promisify(wx.getSavedFileList,obj),
    getSavedFileInfo: obj=>promisify(wx.getSavedFileInfo,obj),
    removeSavedFile: obj=>promisify(wx.removeSavedFile,obj),
    openDocument: obj=>promisify(wx.openDocument,obj),

    // 数据缓存
    setStorage: obj=>promisify(wx.setStorage,obj),
    getStorage: obj=>promisify(wx.getStorage,obj),
    getStorageInfo: obj=>promisify(wx.getStorageInfo,obj),
    removeStorage: obj=>promisify(wx.removeStorage,obj),

    // 位置
    getLocation: obj=>promisify(wx.getLocation,obj),
    chooseLocation: obj=>promisify(wx.chooseLocation,obj),
    openLocation: obj=>promisify(wx.openLocation,obj),

    // 设备
    getSystemInfo: obj=>promisify(wx.getSystemInfo,obj),
    getNetworkType: obj=>promisify(wx.getNetworkType,obj),
    startAccelerometer: obj=>promisify(wx.startAccelerometer,obj),
    stopAccelerometer: obj=>promisify(wx.stopAccelerometer,obj),
    startCompass: obj=>promisify(wx.startCompass,obj),
    stopCompass: obj=>promisify(wx.stopCompass,obj),
    // 打电话
    makePhoneCall: obj=>promisify(wx.makePhoneCall,obj),
    // 扫码
    scanCode: obj=>promisify(wx.scanCode,obj),
    // 剪切板
    setClipboardData: obj=>promisify(wx.setClipboardData,obj),
    getClipboardData: obj=>promisify(wx.getClipboardData,obj),
    //蓝牙
    openBluetoothAdapter: obj=>promisify(wx.openBluetoothAdapter,obj),
    closeBluetoothAdapter: obj=>promisify(wx.closeBluetoothAdapter,obj),
    getBluetoothAdapterState: obj=>promisify(wx.getBluetoothAdapterState,obj),
    startBluetoothDevicesDiscovery: obj=>promisify(wx.startBluetoothDevicesDiscovery,obj),
    stopBluetoothDevicesDiscovery: obj=>promisify(wx.stopBluetoothDevicesDiscovery,obj),
    getBluetoothDevices: obj=>promisify(wx.getBluetoothDevices,obj),
    getConnectedBluetoothDevices: obj=>promisify(wx.getConnectedBluetoothDevices,obj),
    createBLEConnection: obj=>promisify(wx.createBLEConnection,obj),
    closeBLEConnection: obj=>promisify(wx.closeBLEConnection,obj),
    getBLEDeviceServices: obj=>promisify(wx.getBLEDeviceServices,obj),
    // iBeacon
    startBeaconDiscovery: obj=>promisify(wx.startBeaconDiscovery,obj),
    stopBeaconDiscovery: obj=>promisify(wx.stopBeaconDiscovery,obj),
    getBeacons: obj=>promisify(wx.getBeacons,obj),
    // 屏幕亮度
    setScreenBrightness: obj=>promisify(wx.setScreenBrightness,obj),
    getScreenBrightness: obj=>promisify(wx.getScreenBrightness,obj),
    setKeepScreenOn: obj=>promisify(wx.setKeepScreenOn,obj),
    // 振动
    vibrateLong: obj=>promisify(wx.vibrateLong,obj),
    vibrateShort: obj=>promisify(wx.vibrateShort,obj),
    // 联系人
    addPhoneContact: obj=>promisify(wx.addPhoneContact,obj),
    // NFC
    getHCEState: obj=>promisify(wx.getHCEState,obj),
    startHCE: obj=>promisify(wx.startHCE,obj),
    stopHCE: obj=>promisify(wx.stopHCE,obj),
    sendHCEMessage: obj=>promisify(wx.sendHCEMessage,obj),
    // Wi-Fi
    startWifi: obj=>promisify(wx.startWifi,obj),
    stopWifi: obj=>promisify(wx.stopWifi,obj),
    connectWifi: obj=>promisify(wx.connectWifi,obj),
    getWifiList: obj=>promisify(wx.getWifiList,obj),
    setWifiList: obj=>promisify(wx.setWifiList,obj),
    getConnectedWifi: obj=>promisify(wx.getConnectedWifi,obj),

    // 第三方平台
    getExtConfig: obj=>promisify(wx.getExtConfig,obj),
    
    // 转发
    showShareMenu: obj=>promisify(wx.showShareMenu,obj),
    hideShareMenu: obj=>promisify(wx.hideShareMenu,obj),
    updateShareMenu: obj=>promisify(wx.updateShareMenu,obj),
    getShareInfo: obj=>promisify(wx.getShareInfo,obj),
    
    // 收货地址
    chooseAddress: obj=>promisify(wx.chooseAddress,obj),

    // 卡券
    addCard: obj=>promisify(wx.addCard,obj),
    openCard: obj=>promisify(wx.openCard,obj),

    // 设置
    openSetting: obj=>promisify(wx.openSetting,obj),
    getSetting: obj=>promisify(wx.getSetting,obj),
    
    // 微信运动
    getWeRunData: obj=>promisify(wx.getWeRunData,obj),
    
    // 打开小程序
    navigateToMiniProgram: obj=>promisify(wx.navigateToMiniProgram,obj),
    navigateBackMiniProgram: obj=>promisify(wx.navigateBackMiniProgram,obj),
    
    // 获取发票抬头
    chooseInvoiceTitle: obj=>promisify(wx.chooseInvoiceTitle,obj),

    // 生物认证
    checkIsSupportSoterAuthentication: obj=>promisify(wx.checkIsSupportSoterAuthentication,obj),
    startSoterAuthentication: obj=>promisify(wx.startSoterAuthentication,obj),
    checkIsSoterEnrolledInDevice: obj=>promisify(wx.checkIsSoterEnrolledInDevice,obj)

}
