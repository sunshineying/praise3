import PraiseButton from '../public/js/PraiseButton.js';

describe('PraiseButton test', function(){
    it('点击一次测试',function() {
        const btn = new PraiseButton();
        btn.addCount();
        expect(btn.PraiseCount).toBe(1);
    });

    it('点击两次测试', function() {
        const btn = new PraiseButton();
        btn.addCount();
        btn.addCount();
        expect(btn.PraiseCount).toBe(2);
    })
})