// Lite 版：背景功能已移除，保留桩函数以兼容残留引用
export const BG_FILE = 'internal://files/gallery/bg.txt'
export function readBg(cb) { try { cb && cb('') } catch (e) {} }
export function writeBg(src, cb) { try { cb && cb(true) } catch (e) {} }
