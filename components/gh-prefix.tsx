export function ghPrefix(){
    return process.env.NODE_ENV === 'production' ? '/guider-app' : '';
}
