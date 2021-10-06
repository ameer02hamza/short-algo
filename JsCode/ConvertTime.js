const c =(h,m)=>(
    o='one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve'.split`,`,
    o=o.map((x,i)=>i>11?(x||o[i-10])+'teen':x),
    (a=m>30,t=12,m?(m-30?m%15?((m=a?59-m:m)>=(b=a?19:20)?'twenty'+((m%=b)?o[a?m:m-1]:''):o[a?m:m-1])+' minute':'quarter':'half')+(a?' to ':' past '):'')+(h%t|m?o[(a?h:(h?h-1:11))%t]+` o'clock`:o[11]+(h-t?' night':' noon')))

console.log(c(5,1))