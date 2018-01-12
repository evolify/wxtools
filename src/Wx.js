function f(func, obj) {
    return new Promise((resolve, reject) => {
        func({
            ...obj,
            success: resolve,
            fail: reject
        })
    })
}
export default {
    // 界面交互
    showToast: obj => f(wx.showToast, obj),
    showLoading: obj=>f(wx.showLoading,obj),
    showModal: obj=>f(wx.showModal,obj),
    showActionSheet: obj=>f(wx.showActionSheet,obj),
    // 导航条
    setNavigationBarTitle: obj=>f(wx.setNavigationBarTitle,obj),
    setNavigationBarColor: obj=>f(wx.setNavigationBarColor,obj),
    setTopBarText: obj=>f(wx.setTopBarText,obj),
    // 导航
    navigateTo: obj=>f(wx.navigateTo,obj),
    redirectTo: obj=>f(wx.redirectTo,obj),
    switchTab: obj=>f(wx.switchTab,obj),
    reLaunch: obj=>f(wx.reLaunch,obj),

    // 用户相关
    login: obj=>f(wx.login,obj),
    checkSession: obj=>f(wx.checkSession,obj),
    authorize: obj=>f(wx.authorize,obj),
    getUserInfo: obj=>f(wx.getUserInfo,obj),
    
    // 支付
    requestPayment: obj=>f(wx.requestPayment,obj),

    // 图片
    chooseImage: obj=>f(wx.chooseImage,obj),
    previewImage: obj=>f(wx.previewImage,obj),
    getImageInfo: obj=>f(wx.getImageInfo,obj),
    saveImageToPhotosAlbum: obj=>f(wx.saveImageToPhotosAlbum,obj),

    // 文件
    uploadFile: obj=>f(wx.uploadFile,obj),
    downloadFile: obj=>f(wx.downloadFile,obj),

    // 录音
    startRecord: obj=>f(wx.startRecord,obj),

    // 音频播放
    playVoice: obj=>f(wx.playVoice,obj),

    // 音乐播放
    getBackgroundAudioPlayerState: obj=>f(wx.getBackgroundAudioPlayerState,obj),
    playBackgroundAudio: obj=>f(wx.playBackgroundAudio,obj),
    seekBackgroundAudio: obj=>f(wx.seekBackgroundAudio,obj),

    // 视频
    chooseVideo: obj=>f(wx.chooseVideo,obj),
    saveVideoToPhotosAlbum: obj=>f(wx.saveVideoToPhotosAlbum,obj),

    // 文件
    saveFile: obj=>f(wx.saveFile,obj),
    getFileInfo: obj=>f(wx.getFileInfo,obj),
    getSavedFileList: obj=>f(wx.getSavedFileList,obj),
    getSavedFileInfo: obj=>f(wx.getSavedFileInfo,obj),
    removeSavedFile: obj=>f(wx.removeSavedFile,obj),
    openDocument: obj=>f(wx.openDocument,obj),

    // 数据缓存
    setStorage: obj=>f(wx.setStorage,obj),
    getStorage: obj=>f(wx.getStorage,obj),
    getStorageInfo: obj=>f(wx.getStorageInfo,obj),
    removeStorage: obj=>f(wx.removeStorage,obj),

    // 位置
    getLocation: obj=>f(wx.getLocation,obj),
    chooseLocation: obj=>f(wx.chooseLocation,obj),
    openLocation: obj=>f(wx.openLocation,obj),

    // 设备
    getSystemInfo: obj=>f(wx.getSystemInfo,obj),
    getNetworkType: obj=>f(wx.getNetworkType,obj),
    startAccelerometer: obj=>f(wx.startAccelerometer,obj),
    stopAccelerometer: obj=>f(wx.stopAccelerometer,obj),
    startCompass: obj=>f(wx.startCompass,obj),
    stopCompass: obj=>f(wx.stopCompass,obj),
    // 打电话
    makePhoneCall: obj=>f(wx.makePhoneCall,obj),
    // 扫码
    scanCode: obj=>f(wx.scanCode,obj),
    // 剪切板
    setClipboardData: obj=>f(wx.setClipboardData,obj),
    getClipboardData: obj=>f(wx.getClipboardData,obj),
    //蓝牙
    openBluetoothAdapter: obj=>f(wx.openBluetoothAdapter,obj),
    closeBluetoothAdapter: obj=>f(wx.closeBluetoothAdapter,obj),
    getBluetoothAdapterState: obj=>f(wx.getBluetoothAdapterState,obj),
    startBluetoothDevicesDiscovery: obj=>f(wx.startBluetoothDevicesDiscovery,obj),
    stopBluetoothDevicesDiscovery: obj=>f(wx.stopBluetoothDevicesDiscovery,obj),
    getBluetoothDevices: obj=>f(wx.getBluetoothDevices,obj),
    getConnectedBluetoothDevices: obj=>f(wx.getConnectedBluetoothDevices,obj),
    createBLEConnection: obj=>f(wx.createBLEConnection,obj),
    closeBLEConnection: obj=>f(wx.closeBLEConnection,obj),
    getBLEDeviceServices: obj=>f(wx.getBLEDeviceServices,obj),
    // iBeacon
    startBeaconDiscovery: obj=>f(wx.startBeaconDiscovery,obj),
    stopBeaconDiscovery: obj=>f(wx.stopBeaconDiscovery,obj),
    getBeacons: obj=>f(wx.getBeacons,obj),
    // 屏幕亮度
    setScreenBrightness: obj=>f(wx.setScreenBrightness,obj),
    getScreenBrightness: obj=>f(wx.getScreenBrightness,obj),
    setKeepScreenOn: obj=>f(wx.setKeepScreenOn,obj),
    // 振动
    vibrateLong: obj=>f(wx.vibrateLong,obj),
    vibrateShort: obj=>f(wx.vibrateShort,obj),
    // 联系人
    addPhoneContact: obj=>f(wx.addPhoneContact,obj),
    // NFC
    getHCEState: obj=>f(wx.getHCEState,obj),
    startHCE: obj=>f(wx.startHCE,obj),
    stopHCE: obj=>f(wx.stopHCE,obj),
    sendHCEMessage: obj=>f(wx.sendHCEMessage,obj),
    // Wi-Fi
    startWifi: obj=>f(wx.startWifi,obj),
    stopWifi: obj=>f(wx.stopWifi,obj),
    connectWifi: obj=>f(wx.connectWifi,obj),
    getWifiList: obj=>f(wx.getWifiList,obj),
    setWifiList: obj=>f(wx.setWifiList,obj),
    getConnectedWifi: obj=>f(wx.getConnectedWifi,obj),

    // 第三方平台
    getExtConfig: obj=>f(wx.getExtConfig,obj),
    
    // 转发
    showShareMenu: obj=>f(wx.showShareMenu,obj),
    hideShareMenu: obj=>f(wx.hideShareMenu,obj),
    updateShareMenu: obj=>f(wx.updateShareMenu,obj),
    getShareInfo: obj=>f(wx.getShareInfo,obj),
    
    // 收货地址
    chooseAddress: obj=>f(wx.chooseAddress,obj),

    // 卡券
    addCard: obj=>f(wx.addCard,obj),
    openCard: obj=>f(wx.openCard,obj),

    // 设置
    openSetting: obj=>f(wx.openSetting,obj),
    getSetting: obj=>f(wx.getSetting,obj),
    
    // 微信运动
    getWeRunData: obj=>f(wx.getWeRunData,obj),
    
    // 打开小程序
    navigateToMiniProgram: obj=>f(wx.navigateToMiniProgram,obj),
    navigateBackMiniProgram: obj=>f(wx.navigateBackMiniProgram,obj),
    
    // 获取发票抬头
    chooseInvoiceTitle: obj=>f(wx.chooseInvoiceTitle,obj),

    // 生物认证
    checkIsSupportSoterAuthentication: obj=>f(wx.checkIsSupportSoterAuthentication,obj),
    startSoterAuthentication: obj=>f(wx.startSoterAuthentication,obj),
    checkIsSoterEnrolledInDevice: obj=>f(wx.checkIsSoterEnrolledInDevice,obj)

}