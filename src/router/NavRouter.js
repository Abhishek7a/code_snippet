import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeNavbar1 from '../pages/codeNavbars/CodeNavbar1';
import CodeNavbar2 from '../pages/codeNavbars/CodeNavbar2';
import CodeNavbar3 from '../pages/codeNavbars/CodeNavbar3';
import CodeNavbar4 from '../pages/codeNavbars/CodeNavbar4';
import CodeNavbar5 from '../pages/codeNavbars/CodeNavbar5';
import CodeSidebar1 from '../pages/codeSidebars/CodeSidebar1';
import CodeSidebar2 from '../pages/codeSidebars/CodeSidebar2';
import CodeSidebar3 from '../pages/codeSidebars/CodeSidebar3';
import CodeFooter1 from '../pages/codeFooter/CodeFooter1';
import CodeFooter2 from '../pages/codeFooter/CodeFooter2';
import CodeFooter3 from '../pages/codeFooter/CodeFooter3';
import CodeFooter4 from '../pages/codeFooter/CodeFooter4';
import CodeAccordion1 from '../pages/codeAccordions/CodeAccordion1';
import CodeAccordion2 from '../pages/codeAccordions/CodeAccordion2';
import CodeEcommerce1 from '../pages/codeEcommerce/CodeEcommerce1';
import CodeEcommerce2 from '../pages/codeEcommerce/CodeEcommerce2';

export default function NavRouter() {
    return (
            <Routes>
                <Route exact path='/codeNavbar1' element={<CodeNavbar1 />} />
                <Route exact path='/codeNavbar2' element={<CodeNavbar2 />} />
                <Route exact path='/codeNavbar3' element={<CodeNavbar3 />} />
                <Route exact path='/codeNavbar4' element={<CodeNavbar4 />} />
                <Route exact path='/codeNavbar5' element={<CodeNavbar5 />} />

                <Route exact path='/codeSidebar1' element={<CodeSidebar1 />} />
                <Route exact path='/codeSidebar2' element={<CodeSidebar2 />} />
                <Route exact path='/codeSidebar3' element={<CodeSidebar3 />} />

                <Route exact path='/codeFooter1' element={<CodeFooter1 />} />
                <Route exact path='/codeFooter2' element={<CodeFooter2 />} />
                <Route exact path='/codeFooter3' element={<CodeFooter3 />} />
                <Route exact path='/codeFooter4' element={<CodeFooter4 />} />

                <Route exact path='/codeAccordion1' element={<CodeAccordion1 />} />
                <Route exact path='/codeAccordion2' element={<CodeAccordion2 />} />

                <Route exact path='/codeEcommerce1' element={<CodeEcommerce1 />} />
                <Route exact path='/codeEcommerce2' element={<CodeEcommerce2 />} />
            </Routes>

    )
}
